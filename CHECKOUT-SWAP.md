# Instruções de Troca de Checkout

## Arquivo a editar
`D:\Apps\SiteDeVendasFL\index.html`

## Localização exata
Procure por `var SITE_CONFIG` (aproximadamente linha 1938).

## Para ativar HOTMART
Altere SOMENTE esta linha:
```
checkoutProvider: 'hotmart',
```

## Para ativar GGCHECKOUT
Altere SOMENTE esta linha:
```
checkoutProvider: 'ggcheckout',
```

## REGRAS — NÃO VIOLAR
1. Alterar APENAS o valor de `checkoutProvider` (hotmart ou ggcheckout)
2. NÃO alterar NENHUMA URL dentro de `checkoutUrls`
3. NÃO alterar NENHUM outro campo do SITE_CONFIG
4. NÃO usar replace_all ou substituição global
5. NÃO tocar em preconnects, scripts, ou qualquer outro código

## Após alterar
```bash
cd D:/Apps/SiteDeVendasFL
git add index.html
git commit -m "Trocar checkout para [NOME DA PLATAFORMA]"
git push origin main
```

## Verificação
```bash
curl -s https://flstudiointeligente.online | grep "checkoutProvider"
```
Deve retornar: `checkoutProvider: 'hotmart'` ou `checkoutProvider: 'ggcheckout'`

## URLs (NUNCA ALTERAR)
- Hotmart: `https://pay.hotmart.com/K102592452T?checkoutMode=2`
- GGCheckout: `https://pagamentoseguro.flstudiointeligente.online/checkout/v3/N0b4E9kUW4exmlm3ZJP9`
