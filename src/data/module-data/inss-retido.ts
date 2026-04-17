import type { TrainingModule } from "../moduleTypes";
import { legalLink as l } from "../legalLink";

export const inssRetido: TrainingModule = {
  slug: "inss-retido",
  order: 4,
  title: "INSS Retido",
  summary: "Retenção previdenciária em cessão de mão de obra, empreitada, construção civil, dispensa, Simples Nacional e DCTFWeb.",
  level: "Operacional",
  estimatedTime: "5h",
  lastReviewed: "17/04/2026",
  heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Obra de construção civil com trabalhadores e estrutura metálica.",
  learningGoals: [
    "Distinguir cessão de mão de obra, empreitada total e empreitada parcial.",
    "Identificar serviços sujeitos à retenção previdenciária e hipóteses de dispensa.",
    "Tratar construção civil, CPRB/desoneração e prestadores do Simples Nacional.",
    "Escriturar retenções previdenciárias e conciliar com DCTFWeb."
  ],
  submodules: [
    { title: "Enquadramento", topics: ["cessão de mão de obra", "empreitada", "subcontratação", "trabalho temporário"] },
    { title: "Base de cálculo", topics: ["materiais", "equipamentos", "deduções", "retenção 11%", "retenção 3,5%"] },
    { title: "Obrigações", topics: ["nota fiscal", "Reinf", "DCTFWeb", "compensação", "responsabilidade solidária"] }
  ],
  sections: [
    {
      title: "Quando nasce a retenção previdenciária",
      type: "conceito",
      body: [
        `A retenção previdenciária nasce, em regra, quando há contratação de serviços executados mediante cessão de mão de obra ou empreitada, conforme ${l("lei-8212-1991", "Lei nº 8.212/1991")} e regulamentação da ${l("in-rfb-2110-2022", "IN RFB nº 2.110/2022")}.`,
        "Cessão de mão de obra envolve trabalhadores colocados à disposição do contratante, em suas dependências ou de terceiros, para serviços contínuos. Empreitada envolve execução de tarefa, obra ou serviço previamente ajustado, com resultado contratado."
      ]
    },
    {
      title: "Alíquota, base e deduções",
      type: "base-legal",
      body: [
        "A alíquota geral tradicional é 11% sobre o valor bruto da nota fiscal, fatura ou recibo, observadas deduções e exclusões admitidas. Empresas sujeitas à CPRB/desoneração podem ter retenção reduzida, como 3,5%, quando a legislação aplicável assim determinar.",
        "Materiais e equipamentos só reduzem base quando a norma permite e quando contrato e nota fiscal discriminam adequadamente os valores. Não basta lançar uma observação genérica no corpo da nota."
      ]
    },
    {
      title: "Dispensa e Simples Nacional",
      type: "atencao",
      body: [
        "A Receita publicou orientação em 2025 sobre consolidação de hipóteses de dispensa da retenção previdenciária em contratos de serviços e obras. Consulte a redação atual da IN RFB nº 2.110/2022 no SIJUT antes de afastar a retenção.",
        `Optantes pelo Simples Nacional exigem leitura combinada da ${l("lc-123-2006", "LC nº 123/2006")}, da ${l("res-cgsn-140-2018", "Resolução CGSN nº 140/2018")} e da IN previdenciária. Cessão ou locação de mão de obra pode afetar permanência no regime, conforme atividade e hipótese legal.`
      ]
    }
  ],
  examples: [
    {
      title: "Manutenção predial com equipe residente",
      scenario: "Prestador disponibiliza equipe diária nas dependências do tomador para manutenção elétrica e hidráulica.",
      steps: [
        "Verificar contrato: continuidade, disponibilização de trabalhadores e local de execução.",
        "Confirmar se o serviço está no rol sujeito à retenção na IN vigente.",
        "Analisar materiais/equipamentos com discriminação idônea.",
        "Calcular retenção, registrar no contas a pagar e escriturar.",
        "Conciliar retenção previdenciária com DCTFWeb e eventual compensação do prestador."
      ],
      legalBasis: "Lei nº 8.212/1991 e IN RFB nº 2.110/2022."
    }
  ],
  commonMistakes: [
    "Decidir retenção apenas pelo CNAE do prestador.",
    "Tratar empreitada total e parcial como equivalentes.",
    "Reduzir base por materiais sem contrato e nota fiscal discriminados.",
    "Ignorar retenção reduzida de empresa desonerada quando aplicável.",
    "Não validar efeitos para prestador optante do Simples Nacional."
  ],
  checklist: [
    "Leia contrato e identifique cessão, empreitada total, empreitada parcial ou serviço comum.",
    "Consulte IN RFB nº 2.110/2022 vigente e atos alteradores.",
    "Valide regime do prestador, CPRB/desoneração e Simples Nacional.",
    "Confirme base de cálculo e deduções admitidas.",
    "Escriture retenção e concilie com DCTFWeb.",
    "Arquive evidências de dispensa quando não houver retenção."
  ],
  quiz: [
    {
      question: "A retenção previdenciária de serviços depende principalmente de:",
      options: ["Nome comercial do fornecedor.", "Caracterização de cessão de mão de obra ou empreitada e serviço enquadrado.", "CFOP da nota.", "Alíquota de ISS municipal."],
      answer: 1,
      explanation: "A natureza da contratação e o enquadramento na norma previdenciária são centrais."
    },
    {
      question: "Materiais podem reduzir a base da retenção quando:",
      options: ["O fornecedor pedir por e-mail.", "Estiverem corretamente previstos e discriminados nos termos da norma.", "A nota tiver qualquer observação.", "O tomador for do lucro presumido."],
      answer: 1,
      explanation: "A dedução exige aderência ao contrato, nota e regras da IN vigente."
    }
  ],
  references: ["lei-8212-1991", "in-rfb-2110-2022", "lc-123-2006", "res-cgsn-140-2018", "efd-reinf-manual", "agenda-tributaria"],
  validationNotes: [
    "A dispensa de retenção foi tema de consolidação pela Receita em 2025; validar redação atual no SIJUT.",
    "Construção civil depende de contrato, CNO, modalidade de empreitada e documentação específica."
  ]
};
