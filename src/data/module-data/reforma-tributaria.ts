import type { TrainingModule } from "../moduleTypes";
import { legalLink as l } from "../legalLink";

export const reformaTributaria: TrainingModule = {
  slug: "reforma-tributaria",
  order: 7,
  title: "Reforma Tributária",
  summary: "CBS, IBS, Imposto Seletivo, transição, não cumulatividade, split payment, cashback, Simples, documentos fiscais e obrigações acessórias.",
  level: "Estratégico",
  estimatedTime: "6h",
  lastReviewed: "17/04/2026",
  transitional: true,
  heroImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Sala de reunião corporativa com quadro e mesa.",
  learningGoals: [
    "Entender a arquitetura constitucional da CBS, IBS e IS.",
    "Mapear cronograma de transição e coexistência com tributos atuais.",
    "Reconhecer efeitos operacionais em documentos fiscais, créditos e obrigações.",
    "Identificar pontos que exigem regulamentação, parametrização e validação humana."
  ],
  submodules: [
    { title: "Novos tributos", topics: ["CBS", "IBS", "IS", "competência", "sujeito passivo", "local da operação"] },
    { title: "Crédito e pagamento", topics: ["não cumulatividade", "split payment", "ressarcimento", "cashback"] },
    { title: "Transição", topics: ["período de teste", "alíquotas de referência", "ICMS/ISS", "PIS/Cofins", "IPI"] },
    { title: "Operação", topics: ["documento fiscal eletrônico", "cadastro", "DTE", "obrigações acessórias", "Simples Nacional"] }
  ],
  sections: [
    {
      title: "Base normativa atual",
      type: "base-legal",
      body: [
        `A Reforma Tributária do consumo tem base na ${l("ec-132-2023", "EC nº 132/2023")} e foi regulamentada inicialmente pela ${l("lc-214-2025", "LC nº 214/2025")}, que institui IBS, CBS e Imposto Seletivo. Em 2026, a ${l("lc-227-2026", "LC nº 227/2026")} alterou pontos da LC nº 214/2025, por isso a leitura deve ser sempre pela versão consolidada do Planalto.`,
        "IBS é de competência compartilhada entre Estados, Municípios e DF; CBS é de competência da União; IS incide sobre bens e serviços prejudiciais à saúde ou ao meio ambiente, conforme critérios legais."
      ]
    },
    {
      title: "Não cumulatividade e créditos",
      type: "conceito",
      body: [
        "A reforma busca neutralidade e não cumulatividade ampla, com crédito vinculado às aquisições e regras próprias de apropriação, vedação e ressarcimento. A lógica muda preço, fluxo de caixa e compliance, porque o crédito tende a depender de documento fiscal eletrônico e pagamento/recolhimento em modelos definidos na LC e regulamentação.",
        "Durante a transição, empresas conviverão com tributos atuais e novos tributos. Isso exige plano de contas, cadastros de produtos/serviços e parametrizações capazes de separar ICMS/ISS/PIS/Cofins/IPI de IBS/CBS/IS."
      ]
    },
    {
      title: "Split payment e cashback",
      type: "atencao",
      body: [
        `O split payment aparece na ${l("lc-214-2025", "LC nº 214/2025")} como mecanismo de segregação/recolhimento de IBS e CBS em operações de pagamento, com procedimento simplificado e regulamentação operacional. Como a ${l("lc-227-2026", "LC nº 227/2026")} alterou dispositivos, valide a redação atual antes de desenhar automação.`,
        "Cashback devolve valores a pessoas físicas em hipóteses legais, sobretudo para mitigar regressividade. Para empresas, o ponto operacional é capturar corretamente documentos, identificação do adquirente quando exigida e regras de regimes específicos."
      ]
    },
    {
      title: "Documentos fiscais e EFD",
      type: "atencao",
      body: [
        `A LC nº 214/2025 prevê documento fiscal eletrônico para operações com bens e serviços. O ${l("efd-icms-ipi-322", "Guia Prático EFD ICMS/IPI 3.2.2")} já sinaliza tratamento de documentos que carreguem informações dos novos tributos da Reforma Tributária do Consumo.`,
        "Este é o trecho mais sensível para sistemas: campos de IBS/CBS/IS podem existir antes de impactarem todos os recolhimentos definitivos. Marque cadastros, ERP e motor fiscal como pontos de validação contínua."
      ]
    }
  ],
  examples: [
    {
      title: "Venda com coexistência de tributos",
      scenario: "Empresa varejista emite documento fiscal em período de transição com ICMS e informações de CBS/IBS em teste ou fase inicial.",
      steps: [
        "Identificar ano-calendário e produção de efeitos aplicável à operação.",
        "Separar campos informativos dos campos com recolhimento efetivo.",
        "Validar guia, nota técnica e regra da UF para escrituração de ICMS/IPI.",
        "Criar trilha de auditoria: versão do layout, regra aplicada e data de atualização.",
        "Monitorar alterações da LC nº 214/2025, atos do Comitê Gestor e RFB."
      ],
      legalBasis: "EC nº 132/2023, LC nº 214/2025, LC nº 227/2026, Ajustes SINIEF e Guia EFD ICMS/IPI."
    }
  ],
  commonMistakes: [
    "Tratar CBS/IBS como simples troca de nome de PIS/Cofins/ICMS/ISS.",
    "Ignorar produção de efeitos e fases de teste.",
    "Não separar cadastros fiscais atuais dos novos campos de reforma.",
    "Automatizar split payment antes de validar regulamentação operacional atual.",
    "Não revisar contratos de preço bruto/líquido e cláusulas de tributos."
  ],
  checklist: [
    "Mapeie operações por natureza: bens, serviços, importação, exportação, imóvel, intangível.",
    "Leia EC nº 132/2023, LC nº 214/2025 e alterações da LC nº 227/2026.",
    "Identifique datas de produção de efeitos para CBS, IBS e IS.",
    "Atualize cadastros de NCM, serviços, tomadores, fornecedores e regimes.",
    "Revise documentos fiscais, EFD, Reinf, DCTFWeb e integrações ERP.",
    "Crie rotina mensal de monitoramento oficial."
  ],
  quiz: [
    {
      question: "A LC nº 214/2025 deve ser aplicada sem atenção a datas de produção de efeitos?",
      options: ["Sim, tudo vale integralmente desde a publicação.", "Não; a reforma tem transição e efeitos faseados.", "Sim, mas só para ISS.", "Não se aplica a empresas privadas."],
      answer: 1,
      explanation: "A reforma possui transição e dispositivos com produção de efeitos escalonada."
    },
    {
      question: "O IBS é de competência:",
      options: ["Apenas da União.", "Compartilhada entre Estados, Municípios e Distrito Federal.", "Apenas dos Municípios.", "Apenas de autarquias federais."],
      answer: 1,
      explanation: "A arquitetura constitucional define o IBS como tributo de competência compartilhada."
    }
  ],
  references: ["ec-132-2023", "lc-214-2025", "lc-227-2026", "efd-icms-ipi-322", "lc-123-2006", "lc-116-2003", "lc-87-1996"],
  validationNotes: [
    "Tema em transição legislativa e operacional acelerada.",
    "Acompanhar atos do Comitê Gestor do IBS, Receita Federal, CONFAZ, SPED e portais de documentos fiscais."
  ]
};
