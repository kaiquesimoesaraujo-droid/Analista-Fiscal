import type { TrainingModule } from "../moduleTypes";

export const casosPraticosModulo: TrainingModule = {
  slug: "casos-praticos",
  order: 8,
  title: "Casos Práticos Integrados",
  summary: "Roteiros de análise para notas, contratos, retenções, créditos, estornos, ST, ISS municipal e obrigações acessórias.",
  level: "Prática guiada",
  estimatedTime: "5h",
  lastReviewed: "17/04/2026",
  heroImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Escritório com pessoas trabalhando em computadores.",
  learningGoals: [
    "Integrar retenções federais, INSS e ISS em uma única análise de pagamento.",
    "Validar documentos fiscais e escrituração de entrada/saída.",
    "Reconhecer quando chamar especialista, município, SEFAZ ou consultoria.",
    "Criar checklists reutilizáveis para fechamento mensal."
  ],
  submodules: [
    { title: "Serviços", topics: ["NFSe", "ISS", "IRRF", "PIS/Cofins/CSLL", "INSS"] },
    { title: "Mercadorias", topics: ["NF-e", "CFOP", "CST", "ICMS", "IPI", "ST"] },
    { title: "Fechamento", topics: ["EFD", "Reinf", "eSocial", "DCTFWeb", "conciliação"] }
  ],
  sections: [
    {
      title: "Método de análise integrada",
      type: "conceito",
      body: [
        "Um caso prático fiscal raramente envolve um único tributo. A abordagem segura é montar matriz com operação, documento, partes, local, regime tributário, base legal, cálculo, escrituração e evidências.",
        "O objetivo deste módulo é transformar as regras dos módulos anteriores em roteiros de execução: o que perguntar, qual fonte consultar, que documento pedir e onde registrar a conclusão."
      ]
    },
    {
      title: "Trilha mínima de evidências",
      type: "atencao",
      body: [
        "Para cada decisão, arquive: nota fiscal/XML, contrato ou pedido, comprovante de pagamento, memória de cálculo, fonte oficial consultada, print ou PDF do portal local quando necessário, e aprovação interna nos casos de exceção.",
        "Quando a regra depender de UF ou município, deixe a pendência escrita. Não transforme ausência de validação local em premissa silenciosa."
      ]
    }
  ],
  examples: [
    {
      title: "Prestação de serviço com quatro retenções potenciais",
      scenario: "Tomador contrata manutenção predial com equipe alocada, prestador PJ não optante pelo Simples, serviço executado em município diferente do prestador.",
      steps: [
        "ISS: identificar item da LC nº 116/2003 e município competente; consultar retenção local.",
        "INSS: analisar cessão de mão de obra ou empreitada pela IN RFB nº 2.110/2022.",
        "IRRF e CSRF: verificar serviço sujeito, regime do prestador, dispensa e base.",
        "Obrigações: definir Reinf/eSocial/DCTFWeb e declaração municipal.",
        "Pagamento: calcular líquido por tributo separado e enviar memória ao financeiro."
      ],
      legalBasis: "LC nº 116/2003, legislação municipal, IN RFB nº 2.110/2022, RIR/2018, Lei nº 10.833/2003 e EFD-Reinf."
    },
    {
      title: "Entrada de mercadoria com ICMS-ST e crédito",
      scenario: "Empresa recebe NF-e interestadual com ICMS próprio, ICMS-ST e IPI destacado.",
      steps: [
        "Validar XML, emitente, destinatário, CFOP, CST, NCM e CEST.",
        "Conferir base própria, base ST e MVA/PMPF da UF de destino.",
        "Verificar direito a crédito de ICMS/IPI conforme destino da mercadoria.",
        "Escriturar registros EFD conforme Guia 3.2.2 e regra estadual.",
        "Apontar inconsistência ao fornecedor antes do fechamento se CFOP/CST estiverem incompatíveis."
      ],
      legalBasis: "LC nº 87/1996, Convênio ICMS 142/2018, Ripi/2010, Ajuste SINIEF 07/2005 e Guia EFD ICMS/IPI 3.2.2."
    }
  ],
  commonMistakes: [
    "Fechar pagamento antes de validar retenções.",
    "Usar uma única memória de cálculo para tributos com bases diferentes.",
    "Não pedir contrato ou escopo de serviço.",
    "Aceitar XML com CST/CFOP incoerentes sem questionar fornecedor.",
    "Não registrar base legal para exceções."
  ],
  checklist: [
    "Receba nota/XML, contrato, pedido e evidências de local de execução.",
    "Classifique operação e tributos potenciais.",
    "Consulte fontes oficiais nacionais e locais.",
    "Monte memória de cálculo separada por tributo.",
    "Defina obrigação acessória e responsável pela entrega.",
    "Registre pendências e validações humanas necessárias."
  ],
  quiz: [
    {
      question: "Em um serviço executado em outro município, a retenção de ISS deve ser definida por:",
      options: ["Regra nacional, item de serviço e legislação do município competente.", "NCM da nota.", "Tabela TIPI.", "Apenas contrato comercial."],
      answer: 0,
      explanation: "ISS combina LC nº 116/2003 com lei e procedimento municipal."
    },
    {
      question: "Ao receber NF-e com ST, qual conjunto deve ser validado?",
      options: ["Somente valor total.", "NCM, descrição, CEST, CFOP, CST, UF de destino, acordo e base ST.", "Somente data de emissão.", "Somente DANFE impresso."],
      answer: 1,
      explanation: "ST depende de múltiplos campos e norma da UF de destino."
    }
  ],
  references: ["lc-116-2003", "in-rfb-2110-2022", "lei-10833-2003", "rir-2018", "lc-87-1996", "conv-icms-142-2018", "efd-icms-ipi-322", "efd-reinf-manual"],
  validationNotes: [
    "Use os roteiros como checklist e valide cada caso real com fonte oficial.",
    "Operações com valores relevantes, benefícios fiscais, regimes especiais ou autuações exigem revisão profissional."
  ]
};
