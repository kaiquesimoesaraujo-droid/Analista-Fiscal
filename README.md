# Portal Tributário Brasil

Portal estático de treinamento fiscal e tributário brasileiro, organizado em trilha de aprendizagem, módulos, glossário, biblioteca legal, atualizações, FAQ, checklists e estudos de caso.

Se você só quer saber quais pastas usar, comece por:

```text
COMECE_AQUI.md
```

> Conteúdo educacional. Operações reais devem ser validadas conforme legislação específica aplicável, especialmente quando dependerem de UF, município, regime especial, benefício fiscal, produção de efeitos ou transição legislativa.

## Arquitetura

- **Astro** para geração de HTML estático.
- **Tailwind CSS** integrado ao Astro, com camada de estilos próprios em `src/styles/global.css`.
- Conteúdo versionável em TypeScript dentro de `src/data`.
- Páginas dinâmicas de módulos em `src/pages/modulos/[slug].astro`.
- Busca client-side com índice estático em `src/pages/search-index.json.ts`.
- Deploy pronto para GitHub Pages via `.github/workflows/deploy.yml`.

## Estrutura

```text
portal-tributario/
  .github/workflows/deploy.yml
  public/
  src/
    components/
    data/
      module-data/
      cases.ts
      faqs.ts
      glossary.ts
      legal.ts
      modules.ts
      updates.ts
    layouts/
    pages/
      modulos/
    styles/
  astro.config.mjs
  package.json
  tailwind.config.mjs
```

## Como instalar

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Depois acesse o endereço exibido no terminal, normalmente `http://localhost:4321`.

## Como gerar versão publicável

```bash
npm run build
npm run preview
```

O build estático será criado em `dist/`.

## Como editar conteúdo

O jeito mais fácil e gratuito é editar pelo navegador no próprio GitHub. Veja o passo a passo em:

```text
COMO_EDITAR_GRATIS.md
```

- Módulos: edite arquivos em `src/data/module-data/`.
- Ordem e registro dos módulos: `src/data/modules.ts`.
- Biblioteca legal: `src/data/legal.ts`.
- Glossário: `src/data/glossary.ts`.
- Atualizações: `src/data/updates.ts`.
- FAQ: `src/data/faqs.ts`.
- Casos práticos: `src/data/cases.ts`.

Cada módulo contém:

- visão geral;
- objetivos;
- submódulos;
- explicação didática;
- exemplos práticos;
- erros comuns;
- checklist;
- quiz;
- referências oficiais;
- data de última revisão;
- pontos de validação humana.

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie para o repositório tudo que está **dentro** da pasta `portal-tributario`.
3. No GitHub, acesse **Settings > Pages**.
4. Em **Build and deployment**, selecione **GitHub Actions**.
5. Faça push na branch `main`.
6. O workflow `Deploy to GitHub Pages` fará o build e publicará o conteúdo.

O `astro.config.mjs` detecta automaticamente `GITHUB_REPOSITORY` no GitHub Actions e ajusta `site` e `base` para o nome do repositório. Se quiser forçar outro caminho:

```bash
BASE_PATH=/nome-do-repo SITE_URL=https://usuario.github.io npm run build
```

## Fontes oficiais utilizadas

As fontes estão cadastradas em `src/data/legal.ts` e aparecem com links clicáveis na Biblioteca Legal e nos módulos. Principais grupos:

- Planalto: Constituição Federal, CTN, LC nº 116/2003, LC nº 87/1996, LC nº 123/2006, EC nº 132/2023, LC nº 214/2025, LC nº 227/2026, RIR/2018, Ripi/2010, Lei nº 9.430/1996, Lei nº 10.833/2003, Lei nº 8.212/1991.
- Receita Federal: tabelas IRPF 2026, Agenda Tributária, TIPI, orientações de IPI, sistema Normas/SIJUT para INs e Resoluções.
- SPED: EFD ICMS/IPI, Guia Prático 3.2.2, EFD-Reinf e manuais.
- eSocial: portal oficial e leiautes.
- CONFAZ: Convênio SINIEF s/nº de 1970, CFOP, Ajuste SINIEF 07/2005, Ajuste SINIEF 02/2009, Convênio ICMS 142/2018 e portal de Substituição Tributária.
- CGSN/Simples Nacional: Resolução CGSN nº 140/2018 via sistema Normas da Receita.

## Regras de atualização do conteúdo jurídico

- Preferir norma oficial consolidada.
- Indicar produção de efeitos e transição sempre que possível.
- Para ISS, validar município competente e legislação local.
- Para ICMS, ST, MVA, crédito, benefícios e obrigações, validar UF de destino/origem.
- Para EFD, eSocial, EFD-Reinf, NF-e e Reforma Tributária, validar manual, nota técnica e layout vigente.
- Quando houver dúvida razoável: **validar conforme legislação específica aplicável**.

## Licença de uso interno

Estrutura e código podem ser adaptados para treinamento interno. Revise direitos de uso de imagens externas antes de uso comercial público ou substitua por imagens próprias.
