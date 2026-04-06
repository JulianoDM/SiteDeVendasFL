use strict;
use warnings;
use IO::Socket::INET;
use IO::Select;

my $port = 3457;
my $dir  = $0 =~ s/[^\/\\]+$//r;
$dir =~ s/[\/\\]$//;
$dir ||= '.';

my $server = IO::Socket::INET->new(
    LocalPort => $port,
    Type      => SOCK_STREAM,
    Reuse     => 1,
    Listen    => 20,
) or die "Cannot create server: $!\n";

print "Landing page server running on http://localhost:$port\n";

my %mime = (
    html => 'text/html; charset=utf-8',
    css  => 'text/css',
    js   => 'application/javascript',
    jpg  => 'image/jpeg',
    jpeg => 'image/jpeg',
    png  => 'image/png',
    gif  => 'image/gif',
    svg  => 'image/svg+xml',
    ico  => 'image/x-icon',
    webp => 'image/webp',
    webm => 'video/webm',
    mp4  => 'video/mp4',
    woff2=> 'font/woff2',
    json => 'application/json',
);

$| = 1;

while (1) {
    my $sel = IO::Select->new($server);
    if ($sel->can_read(1)) {
        my $client = $server->accept() or next;
        $client->autoflush(1);

        # Read request with timeout
        my $request = '';
        my $csel = IO::Select->new($client);
        while ($csel->can_read(2)) {
            my $line;
            my $bytes = sysread($client, $line, 4096);
            last unless $bytes;
            $request .= $line;
            last if $request =~ /\r?\n\r?\n/;
        }

        my ($method, $path) = $request =~ /^(\w+)\s+(\S+)/;
        $path //= '/';
        $path =~ s/\?.*//;
        $path = '/index.html' if $path eq '/';

        # Security: prevent directory traversal
        $path =~ s/\.\.//g;
        my $file = "$dir$path";
        $file =~ s/\//\\/g if $^O eq 'MSWin32';

        if (-f $file) {
            open my $fh, '<:raw', $file or do {
                print $client "HTTP/1.1 500 Error\r\nConnection: close\r\n\r\n";
                close $client;
                next;
            };
            my $data = do { local $/; <$fh> };
            close $fh;

            my ($ext) = $file =~ /\.(\w+)$/;
            my $ct = $mime{lc($ext // '')} // 'application/octet-stream';

            my $header = "HTTP/1.1 200 OK\r\n"
                . "Content-Type: $ct\r\n"
                . "Content-Length: " . length($data) . "\r\n"
                . "Access-Control-Allow-Origin: *\r\n"
                . "Cache-Control: no-cache\r\n"
                . "Connection: close\r\n"
                . "\r\n";
            print $client $header;
            print $client $data;
        } else {
            print $client "HTTP/1.1 404 Not Found\r\nContent-Type: text/plain\r\nConnection: close\r\n\r\n404 Not Found: $path\n";
        }
        close $client;
    }
}
