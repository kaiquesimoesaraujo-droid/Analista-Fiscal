import type { TrainingModule } from "../moduleTypes";
import { legalLink as l } from "../legalLink";

export const iss: TrainingModule = {
  slug: "iss",
  order: 5,
  title: "ISS",
  summary: "Imposto municipal sobre serviços: lista da LC 116, local de recolhimento, retenção na fonte, Simples Nacional e validação municipal.",
  level: "Operacional",
  estimatedTime: "4h",
  lastReviewed: "17/04/2026",
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Prédios comerciais em centro urbano.",
  learningGoals: [
    "Aplicar a LC nº 116/2003 como regra nacional do ISS.",
    "Identificar serviço, local de recolhimento e responsabilidade do tomador.",
    "Separar regra geral nacional das exigências do município competente.",
    "Tratar retenção de optantes pelo Simples Nacional com validação local."
  ],
  submodules: [
    { title: "Regra nacional", topics: ["fato gerador", "lista de serviços", "base de cálculo", "alíquotas mínima/máxima"] },
    { title: "Local e retenção", topics: ["estabelecimento prestador", "exceções do art. 3º", "responsável tributário", "importação/exportação"] },
    { title: "Município", topics: ["NFS-e", "cadastro", "declaração municipal", "Simples Nacional", "tomador substituto"] }
  ],
  sections: [
    {
      title: "Regra nacional e dependência municipal",
      type: "conceito",
      body: [
        `A ${l("lc-116-2003", "LC nº 116/2003")} define normas gerais do ISS, fato gerador, lista de serviços, regras de local de recolhimento e responsabilidade. Mas o ISS é de competência dos Municípios e do Distrito Federal; a lei municipal institui alíquotas, cadastro, retenção e obrigações acessórias dentro dos limites nacionais.`,
        "Por isso, a análise sempre deve separar: regra nacional da LC nº 116/2003, regra do município competente e procedimento do portal municipal de NFS-e ou do padrão nacional, quando adotado."
      ]
    },
    {
      title: "Local de recolhimento",
      type: "base-legal",
      body: [
        "A regra geral do ISS é recolhimento no município do estabelecimento prestador, mas a LC nº 116/2003 traz exceções em que o imposto é devido no local da execução, do tomador, do estabelecimento do tomador ou do bem. Exemplos clássicos envolvem construção civil, limpeza, vigilância, cessão de mão de obra e eventos.",
        "Cada caso deve começar pela identificação do item da lista de serviços. O item da lista direciona competência, retenção e obrigações do tomador."
      ]
    },
    {
      title: "Retenção na fonte",
      type: "atencao",
      body: [
        `A responsabilidade do tomador pode decorrer da LC nº 116/2003 e da lei municipal. Empresas optantes pelo ${l("lc-123-2006", "Simples Nacional")} exigem leitura adicional da LC nº 123/2006 e da ${l("res-cgsn-140-2018", "Resolução CGSN nº 140/2018")}.`,
        "Não use a regra de um município para outro. Serviços prestados em capitais, obras em municípios diversos ou tomadores com inscrição municipal especial podem mudar completamente a rotina de retenção."
      ]
    }
  ],
  examples: [
    {
      title: "Serviço de vigilância em outro município",
      scenario: "Prestador sediado em Campinas executa vigilância em obra localizada em São Paulo.",
      steps: [
        "Localizar o item da lista da LC nº 116/2003.",
        "Verificar se o item tem exceção ao local do estabelecimento prestador.",
        "Consultar lei e portal do município onde o serviço é devido.",
        "Confirmar se o tomador é responsável pela retenção.",
        "Emitir NFS-e conforme município competente e registrar retenção."
      ],
      legalBasis: "LC nº 116/2003 e legislação do município competente."
    }
  ],
  commonMistakes: [
    "Presumir que todo ISS é devido no município do prestador.",
    "Ignorar a lista de serviços e usar apenas CNAE ou descrição livre.",
    "Aplicar alíquota municipal sem consultar lei vigente.",
    "Reter ISS de optante do Simples sem observar regras próprias.",
    "Não cadastrar tomador ou obra no município que exige responsabilidade tributária."
  ],
  checklist: [
    "Identifique item da lista de serviços da LC nº 116/2003.",
    "Determine município competente pela regra geral ou exceção.",
    "Consulte lei municipal, decreto, portal NFS-e e cadastro do tomador.",
    "Verifique regime do prestador e Simples Nacional.",
    "Calcule base, alíquota, retenção e obrigação acessória municipal.",
    "Marque pendências quando não houver clareza local."
  ],
  quiz: [
    {
      question: "O ISS é regulado nacionalmente pela LC nº 116/2003, mas sua aplicação prática depende de:",
      options: ["Lei e procedimentos do município competente.", "Tabela TIPI.", "Ajuste SINIEF 07/2005.", "Somente EFD-Reinf."],
      answer: 0,
      explanation: "O ISS é municipal; a lei local define alíquotas, retenções e obrigações dentro das normas gerais."
    },
    {
      question: "Para definir o local de recolhimento do ISS, o primeiro dado técnico é:",
      options: ["Banco do fornecedor.", "Item da lista de serviços e regra do art. 3º da LC nº 116/2003.", "NCM da mercadoria.", "CEST."],
      answer: 1,
      explanation: "O item da lista direciona exceções de competência e retenção."
    }
  ],
  references: ["lc-116-2003", "lc-123-2006", "res-cgsn-140-2018", "lc-214-2025"],
  validationNotes: [
    "ISS sempre exige validação municipal.",
    "A Reforma Tributária altera gradualmente a relação entre ISS e IBS; validar produção de efeitos da LC nº 214/2025."
  ]
};
