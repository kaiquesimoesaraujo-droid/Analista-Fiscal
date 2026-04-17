# Como editar o site de graça, direto pelo navegador

O caminho mais fácil e gratuito é:

**GitHub Pages + editor do GitHub no navegador**

Se estiver em dúvida sobre qual pasta usar, leia primeiro:

```text
COMECE_AQUI.md
```

Você não precisa pagar hospedagem, CMS ou painel. O GitHub hospeda o site e também permite editar os arquivos pelo navegador.

## Fluxo simples

1. Publique o projeto em um repositório do GitHub.
2. Ative o GitHub Pages com GitHub Actions.
3. Abra o repositório no navegador.
4. Aperte a tecla `.` no teclado.
5. O editor web do GitHub abre.
6. Edite o conteúdo.
7. Clique em **Source Control**.
8. Escreva uma mensagem, por exemplo: `Atualiza módulo de ISS`.
9. Clique em **Commit & Push**.
10. Aguarde o GitHub Actions publicar o site.

Normalmente a atualização aparece no site em poucos minutos.

## Onde editar cada conteúdo

### Módulos da trilha

Pasta:

```text
src/data/module-data/
```

Arquivos:

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

Edite nesses arquivos:

- resumo do módulo;
- objetivos;
- submódulos;
- explicações;
- exemplos;
- erros comuns;
- checklist;
- quiz;
- referências;
- data de revisão.

### Biblioteca legal

Arquivo:

```text
src/data/legal.ts
```

Use para adicionar ou atualizar:

- leis;
- decretos;
- instruções normativas;
- manuais oficiais;
- links da Receita, Planalto, SPED, CONFAZ, CGSN, eSocial.

### Glossário

Arquivo:

```text
src/data/glossary.ts
```

Use para adicionar siglas e conceitos.

### Atualizações

Arquivo:

```text
src/data/updates.ts
```

Use para registrar mudanças importantes, como nova versão de guia, lei, nota técnica ou alteração de obrigação acessória.

### FAQ

Arquivo:

```text
src/data/faqs.ts
```

Use para perguntas e respostas.

### Estudos de caso

Arquivo:

```text
src/data/cases.ts
```

Use para casos práticos de rotina fiscal.

## Regra prática para editar sem quebrar o site

Ao editar, mantenha:

- aspas no começo e no fim dos textos;
- vírgula entre itens;
- colchetes `[]` em listas;
- chaves `{}` nos blocos;
- links oficiais completos começando com `https://`.

Exemplo de item de checklist:

```ts
"Consulte a legislação municipal antes de reter ISS.",
```

Exemplo de referência legal:

```ts
{
  id: "nova-norma",
  title: "Nome da norma",
  url: "https://link-oficial.gov.br",
  source: "Fonte oficial",
  category: "Tema",
  status: "Vigente, validar alterações posteriores.",
  topics: ["tema 1", "tema 2"],
  note: "Observação operacional."
}
```

## Por que esse é o melhor caminho gratuito

- GitHub Pages é gratuito.
- GitHub Actions é gratuito para repositório público dentro dos limites normais.
- O editor web do GitHub é gratuito.
- Não precisa configurar login, banco de dados, servidor ou CMS pago.
- O histórico de alterações fica salvo.
- Dá para voltar uma alteração se algo sair errado.

## O que não é recomendado agora

Um painel `/admin` dentro do próprio site parece mais confortável, mas para salvar alterações de verdade ele precisa de autenticação, permissão de escrita no GitHub e configuração extra. Dá para fazer, mas não é o caminho mais fácil.

Para começar rápido e sem custo, use o editor do GitHub.
