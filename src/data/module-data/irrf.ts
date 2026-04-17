import type { TrainingModule } from "../moduleTypes";
import { legalLink as l } from "../legalLink";

export const irrf: TrainingModule = {
  slug: "irrf",
  order: 2,
  title: "IRRF",
  summary: "Retenção de Imposto de Renda na fonte sobre trabalho, autônomos, aluguéis, serviços profissionais, órgãos públicos e obrigações acessórias.",
  level: "Operacional",
  estimatedTime: "4h",
  lastReviewed: "17/04/2026",
  heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Calculadora sobre documentos financeiros.",
  learningGoals: [
    "Diferenciar rendimentos sujeitos à tabela progressiva, alíquotas específicas e tributação exclusiva.",
    "Aplicar a tabela oficial de 2026 para rendimentos sujeitos à progressividade.",
    "Separar retenções informadas pelo eSocial daquelas informadas na EFD-Reinf.",
    "Reconhecer limites de dispensa, recolhimento via DCTFWeb e comprovante ao beneficiário."
  ],
  submodules: [
    { title: "Pessoas físicas", topics: ["salários", "RPA", "autônomos", "aluguéis", "carnê-leão", "dependentes"] },
    { title: "Pessoas jurídicas", topics: ["serviços profissionais", "propaganda", "limpeza", "segurança", "órgãos públicos"] },
    { title: "Obrigações", topics: ["eSocial", "EFD-Reinf", "DCTFWeb", "comprovante anual", "fim da DIRF"] }
  ],
  sections: [
    {
      title: "Regra geral de leitura do IRRF",
      type: "conceito",
      body: [
        `O IRRF exige identificar beneficiário, natureza do rendimento e momento de pagamento ou crédito. O ${l("rir-2018", "RIR/2018")} consolida grande parte das regras do Imposto de Renda, mas deve ser usado com leis posteriores, normas da Receita e tabelas atuais.`,
        `Para rendimentos sujeitos à tabela progressiva no ano-calendário 2026, use a página oficial de ${l("irpf-2026", "Tabelas de incidência do IRPF 2026")}. A Receita também informa tabela de redução vinculada à Lei nº 15.270/2025.`
      ]
    },
    {
      title: "Serviços de pessoa jurídica e órgãos públicos",
      type: "base-legal",
      body: [
        `Serviços profissionais e atividades específicas podem ter retenção conforme o ${l("rir-2018", "RIR/2018")} e atos complementares. Para pagamentos por órgãos públicos federais, a ${l("in-rfb-1234-2012", "IN RFB nº 1.234/2012")} trata retenções de IRRF, CSLL, Cofins e PIS/Pasep em hipóteses próprias.`,
        `A ${l("lei-9430-1996", "Lei nº 9.430/1996")} é relevante para limites e dispensa de retenção de baixo valor. Ainda assim, a rotina deve validar código de receita, origem da escrituração e vencimento na ${l("agenda-tributaria", "Agenda Tributária da Receita Federal")}.`
      ]
    },
    {
      title: "Substituição da DIRF",
      type: "atencao",
      body: [
        `A Receita Federal comunicou oficialmente o ${l("fim-dirf-2025", "fim da DIRF")} e a prestação das informações por meio de eSocial e EFD-Reinf. Rendimentos do trabalho seguem pelo ${l("esocial", "eSocial")}; rendimentos e retenções não trabalhistas tendem a ser informados na ${l("reinf-servico", "EFD-Reinf")}.`,
        "Em 2026 há situações excepcionais para órgãos públicos em autorregularização e ferramentas de contingência. Marque como pendência qualquer fonte pagadora ainda em migração ou com inconsistência entre Reinf/eSocial e DCTFWeb."
      ]
    }
  ],
  examples: [
    {
      title: "RPA de autônomo",
      scenario: "Empresa paga R$ 3.500,00 a profissional autônomo por serviço eventual, sem vínculo empregatício.",
      steps: [
        "Confirmar se há relação de trabalho sem vínculo e evento aplicável no eSocial.",
        "Calcular contribuição previdenciária do contribuinte individual quando aplicável.",
        "Aplicar tabela progressiva do IRRF vigente para 2026 sobre a base ajustada pelas deduções permitidas.",
        "Gerar recolhimento e informação na DCTFWeb/eSocial.",
        "Emitir comprovante ao beneficiário e conciliar com a declaração pré-preenchida."
      ],
      legalBasis: "RIR/2018, tabelas Receita 2026, eSocial e legislação previdenciária aplicável."
    },
    {
      title: "Consultoria tributária de PJ",
      scenario: "Tomador contrata consultoria tributária de pessoa jurídica não optante pelo Simples.",
      steps: [
        "Ler descrição do serviço e contrato para validar sujeição a IRRF.",
        "Checar se há também CSLL/Cofins/PIS retidos.",
        "Validar dispensa por valor mínimo e código de receita aplicável.",
        "Escriturar pagamento e retenção no evento correto da EFD-Reinf série R-4000.",
        "Conciliar retenção, nota fiscal, pagamento líquido e DCTFWeb."
      ],
      legalBasis: "RIR/2018, Lei nº 9.430/1996, Lei nº 10.833/2003, IN SRF nº 459/2004 e EFD-Reinf."
    }
  ],
  commonMistakes: [
    "Usar tabela progressiva antiga para pagamentos de 2026.",
    "Informar retenção de serviço não trabalhista no eSocial quando deveria estar na EFD-Reinf.",
    "Reter IRRF sem observar dispensa de baixo valor quando aplicável.",
    "Ignorar regime do prestador ou natureza exata do rendimento.",
    "Não conciliar DCTFWeb, evento enviado e DARF emitido."
  ],
  checklist: [
    "Classifique beneficiário: PF, PJ, exterior, órgão público ou entidade especial.",
    "Determine natureza do rendimento e fato gerador do IRRF.",
    "Consulte tabela/alíquota oficial vigente na data do pagamento ou crédito.",
    "Verifique dispensa, isenção, imunidade ou regime diferenciado.",
    "Defina obrigação acessória: eSocial, EFD-Reinf, DCTFWeb e comprovante.",
    "Guarde memória de cálculo e link oficial usado."
  ],
  quiz: [
    {
      question: "Em 2026, a tabela progressiva do IRRF deve ser consultada prioritariamente em qual fonte?",
      options: ["Planilha interna do ano anterior.", "Página oficial da Receita Federal sobre tabelas de 2026.", "Manual antigo da DIRF.", "Código de serviço municipal."],
      answer: 1,
      explanation: "A Receita mantém página oficial com tabela mensal/anual e regras de redução aplicáveis a 2026."
    },
    {
      question: "Com a substituição da DIRF, a informação de retenções não trabalhistas tende a ser prestada por:",
      options: ["EFD-Reinf, observados leiautes vigentes.", "Livro Caixa em PDF.", "Somente NF-e.", "Declaração municipal de ISS."],
      answer: 0,
      explanation: "A Receita aponta eSocial e EFD-Reinf como pilares da substituição da DIRF."
    }
  ],
  references: ["rir-2018", "irpf-2026", "lei-9430-1996", "in-rfb-1234-2012", "efd-reinf-manual", "fim-dirf-2025", "esocial", "agenda-tributaria"],
  validationNotes: [
    "Validar sempre tabela, código de receita e vencimento no mês da operação.",
    "Retenções envolvendo exterior, aplicações financeiras, PLR e prêmios têm regras próprias não esgotadas neste módulo."
  ]
};
