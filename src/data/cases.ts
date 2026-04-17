export type CaseStudy = {
  title: string;
  area: string;
  scenario: string;
  route: string[];
  checklist: string[];
  references: string[];
  validation: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Serviço com ISS, INSS, IRRF e CSRF potenciais",
    area: "Retenções",
    scenario: "Tomador contrata manutenção predial mensal com equipe nas dependências da empresa e nota emitida por PJ não optante pelo Simples.",
    route: [
      "Ler contrato para verificar cessão de mão de obra ou empreitada.",
      "Classificar item da lista de serviços da LC nº 116/2003 e município competente.",
      "Verificar retenções federais de IRRF e CSLL/Cofins/PIS conforme serviço.",
      "Calcular bases separadas por tributo; não misturar INSS com CSRF.",
      "Escriturar retenções em EFD-Reinf/eSocial/DCTFWeb e declaração municipal quando aplicável."
    ],
    checklist: ["contrato", "NFS-e", "regime do prestador", "lei municipal", "memória de cálculo", "evento Reinf/eSocial"],
    references: ["lc-116-2003", "in-rfb-2110-2022", "rir-2018", "lei-10833-2003", "efd-reinf-manual"],
    validation: "Validar município de incidência do ISS e redação atual da IN RFB nº 2.110/2022."
  },
  {
    title: "Mercadoria com ICMS-ST, IPI e escrituração EFD",
    area: "Mercadorias",
    scenario: "Empresa compra produto para revenda de fornecedor interestadual com ICMS próprio, ICMS-ST e IPI destacado.",
    route: [
      "Validar NCM, descrição, CEST, CFOP e CST no XML.",
      "Consultar Convênio ICMS 142/2018 e legislação da UF de destino.",
      "Conferir MVA/PMPF e base de cálculo do ICMS-ST.",
      "Validar se o IPI integra ou não a base do ICMS conforme operação e legislação.",
      "Escriturar conforme Guia Prático EFD ICMS/IPI 3.2.2."
    ],
    checklist: ["XML", "DANFE", "Convênio/Protocolo", "RICMS destino", "Guia EFD", "cadastro do item"],
    references: ["lc-87-1996", "conv-icms-142-2018", "ripi-2010", "efd-icms-ipi-322"],
    validation: "Validar MVA, protocolo e obrigações específicas da UF de destino."
  },
  {
    title: "Transição da Reforma Tributária em documento fiscal",
    area: "Reforma Tributária",
    scenario: "ERP passa a gerar campos de IBS/CBS em operação que ainda contém ICMS/IPI durante fase de transição.",
    route: [
      "Identificar data da operação e produção de efeitos aplicável.",
      "Separar campos informativos de campos com recolhimento efetivo.",
      "Conferir notas técnicas e Guia EFD vigente.",
      "Documentar versão do layout e regra usada pelo motor fiscal.",
      "Criar monitoramento mensal de atos da RFB, Comitê Gestor, CONFAZ e SPED."
    ],
    checklist: ["LC nº 214/2025 consolidada", "LC nº 227/2026", "layout documento fiscal", "Guia EFD", "logs do ERP"],
    references: ["ec-132-2023", "lc-214-2025", "lc-227-2026", "efd-icms-ipi-322"],
    validation: "Ponto em transição. Exige validação humana antes de automatização definitiva."
  }
];
