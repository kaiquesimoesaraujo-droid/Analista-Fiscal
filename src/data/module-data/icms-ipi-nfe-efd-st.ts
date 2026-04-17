import type { TrainingModule } from "../moduleTypes";
import { legalLink as l } from "../legalLink";

export const icmsIpiNfeEfdSt: TrainingModule = {
  slug: "icms-ipi-nfe-efd-st",
  order: 6,
  title: "ICMS, IPI, NF-e, EFD e ST",
  summary: "Formação fiscal ampla para operações com mercadorias, industrialização, documentos fiscais, CFOP, CST, créditos, estornos e substituição tributária.",
  level: "Avançado",
  estimatedTime: "8h",
  lastReviewed: "17/04/2026",
  transitional: true,
  heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Armazém logístico com caixas e corredores.",
  learningGoals: [
    "Ler operações de entrada e saída com ICMS, IPI, NF-e, CFOP e CST.",
    "Aplicar noções de crédito, vedação, manutenção e estorno.",
    "Entender ST, CEST, MVA, ressarcimento e validação por UF.",
    "Usar Guia Prático EFD ICMS/IPI 2026 e separar impactos da Reforma Tributária."
  ],
  submodules: [
    { title: "ICMS", topics: ["incidência", "base de cálculo", "alíquota", "DIFAL", "créditos", "estorno"] },
    { title: "IPI", topics: ["industrialização", "equiparação", "TIPI", "crédito", "apuração"] },
    { title: "Documentos", topics: ["NF-e", "DANFE", "cancelamento", "carta de correção", "inutilização", "contingência"] },
    { title: "EFD e códigos", topics: ["CFOP", "CST", "registro C100", "tabelas estaduais", "PVA"] },
    { title: "ST", topics: ["CEST", "MVA", "Convênio ICMS 142/2018", "GNRE", "ressarcimento"] }
  ],
  sections: [
    {
      title: "ICMS como tributo estadual",
      type: "conceito",
      body: [
        `A ${l("lc-87-1996", "LC nº 87/1996")} é a norma nacional do ICMS, mas a operação real depende do regulamento do ICMS da UF, benefícios, regimes especiais, alíquotas internas, protocolos e obrigações locais. Transferência, bonificação, industrialização por encomenda, importação e devolução exigem leitura operacional própria.`,
        "A não cumulatividade permite crédito em hipóteses legais, mas também exige estorno quando a saída posterior for isenta, não tributada ou quando a mercadoria tiver destino incompatível com manutenção do crédito, ressalvadas exceções."
      ]
    },
    {
      title: "IPI e industrialização",
      type: "base-legal",
      body: [
        `O ${l("ripi-2010", "Ripi/2010")} define industrialização e suas modalidades: transformação, beneficiamento, montagem, acondicionamento/reacondicionamento e renovação/recondicionamento. A alíquota vem da ${l("tipi", "TIPI")} conforme NCM.`,
        "IPI exige identificar estabelecimento industrial ou equiparado, saída tributada, crédito de entradas, operação com suspensão, imunidade, alíquota zero ou produto NT."
      ]
    },
    {
      title: "NF-e, CFOP, CST e EFD",
      type: "atencao",
      body: [
        `A NF-e é instituída pelo ${l("ajuste-sinief-07-2005", "Ajuste SINIEF 07/2005")}. CFOP e CST têm base no ${l("convenio-sn-1970", "Convênio SINIEF s/nº de 1970")} e tabelas vinculadas. A EFD ICMS/IPI segue o ${l("ajuste-sinief-02-2009", "Ajuste SINIEF 02/2009")} e o ${l("efd-icms-ipi-322", "Guia Prático EFD ICMS/IPI versão 3.2.2")}.`,
        "Em 2026, o Guia Prático 3.2.2 trouxe orientação sobre documentos fiscais com informações exclusivas dos novos tributos da Reforma Tributária do Consumo. Valide notas técnicas, Ajustes SINIEF e regra da UF antes de automatizar."
      ]
    },
    {
      title: "Substituição tributária, CEST e MVA",
      type: "base-legal",
      body: [
        `O regime geral de ST está no ${l("conv-icms-142-2018", "Convênio ICMS 142/2018")}, mas a aplicação concreta depende da UF de destino, mercadoria, NCM, CEST, convênio/protocolo específico e legislação interna. A página de ${l("st-confaz", "Substituição Tributária do CONFAZ")} é porta de entrada para validação.`,
        "MVA não é universal. Ela pode ser original, ajustada, definida por PMPF ou substituída por preço sugerido, conforme segmento e UF."
      ]
    }
  ],
  examples: [
    {
      title: "Compra para revenda com ICMS-ST",
      scenario: "Varejista em MT compra produto sujeito à ST de fornecedor em SP.",
      steps: [
        "Verificar NCM, descrição e CEST no Convênio ICMS 142/2018 e norma da UF de destino.",
        "Confirmar se há acordo ou protocolo entre UF remetente e UF destinatária.",
        "Calcular base ST com MVA ajustada ou PMPF conforme regra de destino.",
        "Conferir NF-e com ICMS próprio, ICMS-ST, CEST e informações complementares.",
        "Escriturar entrada na EFD conforme Guia Prático e regras estaduais."
      ],
      legalBasis: "LC nº 87/1996, Convênio ICMS 142/2018, legislação da UF de destino e Guia Prático EFD ICMS/IPI."
    }
  ],
  commonMistakes: [
    "Usar CFOP correto com CST errado, ou o inverso.",
    "Acreditar que NCM sozinha define ST sem descrição e CEST.",
    "Tomar crédito de ICMS sem validar destino da mercadoria e vedação.",
    "Escriturar documentos da Reforma Tributária sem observar Guia EFD 3.2.2.",
    "Aplicar MVA de uma UF em operação destinada a outra UF."
  ],
  checklist: [
    "Classifique operação: compra, venda, devolução, transferência, industrialização, bonificação ou ajuste.",
    "Valide NCM, descrição, CFOP, CST, CEST e natureza da operação.",
    "Consulte LC nº 87/1996, RICMS da UF, convênios/protocolos e benefícios.",
    "Para IPI, valide Ripi, TIPI e equiparação a industrial.",
    "Para ST, confirme UF de destino, MVA/PMPF, inscrição e recolhimento.",
    "Escriture conforme Guia Prático EFD ICMS/IPI vigente e tabelas estaduais."
  ],
  quiz: [
    {
      question: "Na substituição tributária, NCM suficiente para aplicar ST?",
      options: ["Sim, NCM basta em todos os casos.", "Não; é preciso validar descrição, CEST, segmento, acordo e legislação da UF.", "Sim, desde que haja NF-e.", "Não existe ST em operação interestadual."],
      answer: 1,
      explanation: "O Convênio ICMS 142/2018 exige leitura de NCM/SH, descrição, CEST e regras específicas."
    },
    {
      question: "Em 2026, a EFD ICMS/IPI deve observar qual guia prático oficial indicado pelo SPED?",
      options: ["Versão 2.0 de 2012.", "Versão 3.2.2 com vigência a partir de janeiro/2026.", "Manual da DIRF.", "Tabela TIPI apenas."],
      answer: 1,
      explanation: "O SPED publicou a versão 3.2.2 em 25/03/2026 com vigência a partir de janeiro/2026."
    }
  ],
  references: ["lc-87-1996", "ripi-2010", "tipi", "ajuste-sinief-07-2005", "convenio-sn-1970", "cfop", "ajuste-sinief-02-2009", "efd-icms-ipi-322", "conv-icms-142-2018", "st-confaz"],
  validationNotes: [
    "ICMS, ST, MVA, benefícios e obrigações dependem da UF.",
    "Regras de documentos fiscais da Reforma Tributária estão em transição; validar notas técnicas, Ajustes SINIEF e legislação estadual."
  ]
};
