import type { TrainingModule } from "../moduleTypes";
import { legalLink as l } from "../legalLink";

export const fundamentosTributarios: TrainingModule = {
  slug: "fundamentos-tributarios",
  order: 1,
  title: "Fundamentos Tributários",
  summary: "Base conceitual para ler normas, identificar competência, fato gerador, obrigação, responsabilidade, crédito e pontos de validação.",
  level: "Essencial",
  estimatedTime: "3h",
  lastReviewed: "17/04/2026",
  heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Mesa de trabalho com documentos, calculadora e caneta.",
  learningGoals: [
    "Distinguir regra matriz, fato gerador, base de cálculo, alíquota, sujeito ativo e sujeito passivo.",
    "Separar obrigação principal de obrigação acessória e identificar efeitos de descumprimento.",
    "Usar hierarquia normativa para resolver conflitos entre lei nacional, norma estadual, municipal e manual operacional.",
    "Criar rotina de validação antes de aplicar retenção ou escriturar documento fiscal."
  ],
  submodules: [
    { title: "Sistema tributário", topics: ["competência", "legalidade", "anterioridade", "não cumulatividade", "responsabilidade"] },
    { title: "Leitura de norma", topics: ["vigência", "produção de efeitos", "revogação", "regra transitória", "norma consolidada"] },
    { title: "Rotina fiscal", topics: ["documento fiscal", "classificação", "apuração", "retenção", "escrituração", "declaração"] }
  ],
  sections: [
    {
      title: "Como pensar uma incidência tributária",
      type: "conceito",
      body: [
        `Todo tributo deve ser lido pela combinação de hipótese de incidência, fato gerador, base de cálculo, alíquota, sujeito ativo e sujeito passivo. O ponto de partida normativo é a ${l("constituicao", "Constituição Federal")} para competência e limites, e o ${l("ctn", "Código Tributário Nacional")} para conceitos gerais como tributo, obrigação tributária, lançamento, crédito e responsabilidade.`,
        "Na rotina fiscal, uma nota fiscal, contrato ou pagamento só vira obrigação de reter, recolher ou escriturar depois que você identifica a natureza jurídica da operação. Serviço, mercadoria, industrialização, cessão de mão de obra, locação, intermediação e operação financeira têm tratamentos diferentes mesmo quando aparecem na mesma fatura."
      ]
    },
    {
      title: "Hierarquia e conflito aparente de fontes",
      type: "base-legal",
      body: [
        "Fonte oficial prevalece sobre apostila, blog, ementa de curso e interpretação de terceiros. A ordem prática é: Constituição, lei complementar, lei ordinária, decreto/regulamento, instrução normativa, ajuste/convênio, manual técnico e orientação operacional.",
        "Manuais do SPED, eSocial e NF-e são essenciais para layout e validação de campos, mas não criam a hipótese de incidência isoladamente. Eles operacionalizam obrigações acessórias conectadas à lei e aos atos normativos."
      ]
    },
    {
      title: "Vigência, produção de efeitos e transição",
      type: "atencao",
      body: [
        `Nem toda norma publicada produz efeitos imediatamente. A Reforma Tributária é o principal exemplo atual: a ${l("ec-132-2023", "EC nº 132/2023")} e a ${l("lc-214-2025", "LC nº 214/2025")} integram o ordenamento, mas vários dispositivos de IBS, CBS e IS dependem de períodos de teste, fases de transição e regulamentação operacional.`,
        "Ao estudar ou aplicar uma norma, registre sempre três datas: publicação, vigência formal e produção de efeitos. Essa distinção evita antecipar obrigação que ainda está em teste ou ignorar alteração que já impacta documento fiscal e escrituração."
      ]
    }
  ],
  examples: [
    {
      title: "Leitura de um pagamento de serviço",
      scenario: "Empresa toma serviço de manutenção predial de pessoa jurídica e recebe nota com mão de obra e materiais.",
      steps: [
        "Identificar se o serviço está na lista municipal do ISS e qual município é competente.",
        "Checar se há cessão de mão de obra ou empreitada para fins de INSS.",
        "Verificar se o serviço está sujeito a IRRF e CSLL/Cofins/PIS.",
        "Validar regime do prestador, inclusive Simples Nacional, imunidade, isenção ou dispensa.",
        "Registrar base legal usada, alíquota, base de cálculo e obrigação acessória correspondente."
      ],
      legalBasis: "CTN, LC nº 116/2003, Lei nº 8.212/1991, IN RFB nº 2.110/2022, Lei nº 10.833/2003 e normas municipais."
    }
  ],
  commonMistakes: [
    "Aplicar alíquota por costume sem ler enquadramento do serviço.",
    "Confundir vigência formal com produção de efeitos.",
    "Tratar manual técnico como fonte primária de incidência tributária.",
    "Usar legislação de uma UF ou município como regra nacional.",
    "Não guardar evidência da consulta feita à fonte oficial."
  ],
  checklist: [
    "Identifique natureza da operação, prestador, tomador, local e data.",
    "Liste tributos potencialmente envolvidos e descarte com base legal.",
    "Consulte norma oficial consolidada e atos alteradores recentes.",
    "Separe regra nacional, estadual, municipal e orientação operacional.",
    "Registre pontos que exigem validação humana ou local."
  ],
  quiz: [
    {
      question: "Qual é o primeiro passo para decidir se há retenção tributária em um pagamento?",
      options: ["Aplicar a alíquota usada no mês anterior.", "Identificar a natureza jurídica da operação e a base legal aplicável.", "Consultar apenas o código do serviço na nota.", "Usar a interpretação do fornecedor."],
      answer: 1,
      explanation: "Sem natureza da operação e base legal, não há segurança para definir retenção, dispensa ou obrigação acessória."
    },
    {
      question: "Quando uma norma tem produção de efeitos futura, a conduta operacional deve:",
      options: ["Ignorar a norma até revogação expressa.", "Aplicar integralmente na data da publicação.", "Separar vigência, produção de efeitos e regras transitórias.", "Aplicar apenas se houver notícia em blog especializado."],
      answer: 2,
      explanation: "Regras transitórias são decisivas, especialmente na Reforma Tributária."
    }
  ],
  references: ["constituicao", "ctn", "ec-132-2023", "lc-214-2025", "agenda-tributaria"],
  validationNotes: [
    "Este módulo é conceitual; operações reais exigem validação pela norma específica do tributo.",
    "Prazos e obrigações acessórias mudam com frequência e devem ser conferidos na Agenda Tributária e nos portais oficiais."
  ]
};
