# Comece aqui

Se você ficou em dúvida com as pastas, use esta regra:

## A única pasta do site é esta

```text
C:\Users\kaique.araujo\Documents\New project\portal-tributario
```

Tudo que está fora dela pode ser ignorado para este projeto.

No seu caso, estes arquivos/pastas do diretório anterior **não fazem parte do site**:

```text
apuracoes_controle_fiscal_reestruturado.xlsm
VALIDACAO_ENTRADA_FINAL_OPERACIONAL.xlsx
build_validacao_final.ps1
_fontes_validacao
```

Eles são de outro trabalho. Para o site, use apenas:

```text
portal-tributario
```

## O que enviar para o GitHub

Abra a pasta:

```text
C:\Users\kaique.araujo\Documents\New project\portal-tributario
```

Envie para o GitHub **tudo que está dentro dela**.

Ou seja, no GitHub o repositório deve ficar assim:

```text
.github/
public/
src/
.gitignore
astro.config.mjs
COMECE_AQUI.md
COMO_EDITAR_GRATIS.md
package.json
README.md
tailwind.config.mjs
tsconfig.json
```

Não crie no GitHub uma pasta extra chamada `portal-tributario` contendo tudo dentro. O ideal é que esses arquivos fiquem direto na primeira tela do repositório.

## O que você normalmente vai editar

Na maior parte do tempo, você só vai mexer nestas pastas/arquivos:

```text
src/data/module-data/
src/data/legal.ts
src/data/glossary.ts
src/data/updates.ts
src/data/faqs.ts
src/data/cases.ts
```

## O que você pode ignorar

Você não precisa mexer nisso no começo:

```text
src/components/
src/layouts/
src/pages/
src/styles/
astro.config.mjs
tailwind.config.mjs
tsconfig.json
package.json
```

Essas partes são a estrutura visual e técnica do site.

## Tradução simples das pastas

```text
.github/
```

Publica o site automaticamente no GitHub Pages.

```text
public/
```

Arquivos públicos, como ícone do site.

```text
src/components/
```

Peças visuais reutilizáveis. Não precisa mexer.

```text
src/layouts/
```

Estrutura geral das páginas. Não precisa mexer.

```text
src/pages/
```

Páginas do site. Não precisa mexer para editar conteúdo comum.

```text
src/styles/
```

Aparência do site. Não precisa mexer.

```text
src/data/
```

Conteúdo do site. Essa é a pasta mais importante para você.

## Conteúdo principal

Os módulos ficam aqui:

```text
src/data/module-data/
```

Cada arquivo é um módulo:

```text
fundamentos-tributarios.ts
irrf.ts
pis-cofins-csll-retidos.ts
inss-retido.ts
iss.ts
icms-ipi-nfe-efd-st.ts
reforma-tributaria.ts
casos-praticos.ts
```

Se quiser editar o módulo de ISS, por exemplo, abra:

```text
src/data/module-data/iss.ts
```

## Regra para não quebrar

Quando editar textos, mexa só dentro das aspas:

```ts
"Texto que você pode alterar aqui.",
```

Evite apagar:

```text
aspas "
vírgulas ,
colchetes []
chaves {}
```

## Resumo bem curto

Use só a pasta:

```text
portal-tributario
```

Edite principalmente:

```text
src/data/
```

Publique no GitHub tudo que está dentro de:

```text
portal-tributario
```
