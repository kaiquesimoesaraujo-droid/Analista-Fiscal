import type { TrainingModule } from "../moduleTypes";
import { legalLink as l } from "../legalLink";

export const pisCofinsCsllRetidos: TrainingModule = {
  slug: "pis-cofins-csll-retidos",
  order: 3,
  title: "PIS/COFINS/CSLL Retidos",
  summary: "Retenções sociais sobre serviços, fornecimentos a órgãos públicos, dispensas, alíquotas, compensação e escrituração na EFD-Reinf.",
  level: "Operacional",
  estimatedTime: "4h",
  lastReviewed: "17/04/2026",
  heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Equipe analisando relatórios em mesa de reunião.",
  learningGoals: [
    "Reconhecer serviços sujeitos à retenção de CSLL, Cofins e PIS/Pasep.",
    "Distinguir retenções entre pessoas jurídicas privadas e retenções por órgãos públicos.",
    "Aplicar dispensas e validar optantes pelo Simples Nacional.",
    "Preparar escrituração e conciliação com pagamento líquido, Reinf e DCTFWeb."
  ],
  submodules: [
    { title: "Base legal", topics: ["Lei nº 10.833/2003", "IN SRF nº 459/2004", "IN RFB nº 1.234/2012", "IN SRF nº 475/2004"] },
    { title: "Operação", topics: ["serviços sujeitos", "dispensa", "alíquotas", "compensação", "Simples Nacional"] },
    { title: "Obrigações", topics: ["EFD-Reinf R-4020", "DCTFWeb", "comprovante", "órgãos públicos"] }
  ],
  sections: [
    {
      title: "Retenção entre pessoas jurídicas privadas",
      type: "conceito",
      body: [
        `A ${l("lei-10833-2003", "Lei nº 10.833/2003")} prevê retenções de CSLL, Cofins e PIS/Pasep em pagamentos por determinados serviços. A ${l("in-srf-459-2004", "IN SRF nº 459/2004")} disciplina a retenção nos pagamentos efetuados por pessoas jurídicas de direito privado a outras pessoas jurídicas pela prestação de serviços.`,
        "A rotina não deve partir de uma alíquota fixa isolada. Primeiro identifique se o serviço está sujeito à retenção, se o prestador está em regime que afasta a retenção, se há dispensa por valor e se a nota mistura itens com naturezas diferentes."
      ]
    },
    {
      title: "Órgãos públicos e convênios",
      type: "base-legal",
      body: [
        `Para órgãos públicos federais, a referência operacional é a ${l("in-rfb-1234-2012", "IN RFB nº 1.234/2012")}. Para Estados, DF e Municípios, a ${l("in-srf-475-2004", "IN SRF nº 475/2004")} trata retenções quando presentes os pressupostos de convênio e enquadramento.`,
        "Não presuma que prefeitura ou autarquia estadual seguirá exatamente a mesma matriz da União. A operacionalização pode exigir convênio, ato local, cadastro e regras internas de pagamento."
      ]
    },
    {
      title: "Compensação e escrituração",
      type: "atencao",
      body: [
        `Valores retidos podem ser compensados pelo prestador conforme regras de apuração dos tributos administrados pela Receita. A escrituração de rendimentos e retenções não trabalhistas deve seguir a ${l("efd-reinf-manual", "EFD-Reinf")} e seus eventos vigentes.`,
        "Concilie sempre nota fiscal, retenção calculada, pagamento líquido, evento transmitido, DCTFWeb e razão contábil. Divergência pequena recorrente costuma virar problema grande no fechamento anual."
      ]
    }
  ],
  examples: [
    {
      title: "Serviço de limpeza com retenção social",
      scenario: "Tomador privado contrata empresa de limpeza não optante pelo Simples e paga nota mensal.",
      steps: [
        "Confirmar se o serviço está sujeito à retenção de CSLL, Cofins e PIS/Pasep.",
        "Separar materiais reembolsados apenas quando discriminados e aceitos pela norma.",
        "Calcular retenção conforme alíquotas vigentes e verificar dispensa por valor.",
        "Pagar valor líquido ao prestador e registrar retenção a recolher.",
        "Informar retenção na EFD-Reinf e conciliar DCTFWeb."
      ],
      legalBasis: "Lei nº 10.833/2003, IN SRF nº 459/2004 e Manual da EFD-Reinf."
    }
  ],
  commonMistakes: [
    "Aplicar retenção a optante do Simples sem verificar declaração e exceções.",
    "Somar retenções federais e previdenciárias sem separar base legal e base de cálculo.",
    "Usar IN de órgãos públicos para pagamento entre empresas privadas.",
    "Não informar retenção na Reinf após descontar no financeiro.",
    "Desconsiderar dispensa ou valor mínimo sem base legal."
  ],
  checklist: [
    "Classifique tomador: privado, órgão público federal, estadual, municipal ou DF.",
    "Confirme regime do prestador e declaração de Simples Nacional quando aplicável.",
    "Leia descrição do serviço e contrato; não dependa só do CNAE.",
    "Calcule base, alíquotas e dispensa com norma oficial.",
    "Registre evento na EFD-Reinf e concilie DCTFWeb.",
    "Guarde memória de cálculo, nota e comprovante de retenção."
  ],
  quiz: [
    {
      question: "Qual norma deve ser priorizada para retenções de CSLL/Cofins/PIS entre pessoas jurídicas privadas?",
      options: ["IN SRF nº 459/2004, validada no sistema de Normas da Receita.", "Lei municipal do ISS.", "Convênio ICMS 142/2018.", "Tabela CFOP."],
      answer: 0,
      explanation: "A IN SRF nº 459/2004 é a norma operacional federal para retenções em pagamentos entre pessoas jurídicas privadas."
    },
    {
      question: "Uma retenção descontada financeiramente deve ser conciliada com:",
      options: ["Apenas o boleto do fornecedor.", "Nota, razão contábil, EFD-Reinf e DCTFWeb.", "Somente o XML da NF-e.", "Somente o contrato social."],
      answer: 1,
      explanation: "Retenção sem escrituração correta gera inconsistência entre financeiro, fiscal e obrigações acessórias."
    }
  ],
  references: ["lei-10833-2003", "in-srf-459-2004", "in-srf-475-2004", "in-rfb-1234-2012", "efd-reinf-manual", "reinf-servico", "agenda-tributaria"],
  validationNotes: [
    "Validar atos alteradores da IN SRF nº 459/2004 no sistema de Normas da Receita.",
    "Serviços de órgãos públicos estaduais/municipais dependem de convênio e procedimentos locais."
  ]
};
