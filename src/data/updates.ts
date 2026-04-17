export type UpdateItem = {
  date: string;
  title: string;
  description: string;
  sourceId: string;
  tag: string;
};

export const updates: UpdateItem[] = [
  {
    date: "25/03/2026",
    title: "SPED publica Guia Prático EFD ICMS/IPI 3.2.2",
    description: "Versão com vigência a partir de janeiro/2026 e orientação sobre documentos fiscais que carreguem informações dos novos tributos da Reforma Tributária do Consumo.",
    sourceId: "efd-icms-ipi-322",
    tag: "EFD"
  },
  {
    date: "2026",
    title: "LC nº 227/2026 altera pontos da LC nº 214/2025",
    description: "Leitura da Reforma Tributária deve considerar o texto consolidado, especialmente em dispositivos de IBS, CBS, split payment, cadastro e operações.",
    sourceId: "lc-227-2026",
    tag: "Reforma"
  },
  {
    date: "06/02/2026",
    title: "Receita atualiza tabelas de IRPF 2026",
    description: "Página oficial traz tabela mensal, anual, deduções e tabela de redução aplicável ao ano-calendário 2026.",
    sourceId: "irpf-2026",
    tag: "IRRF"
  },
  {
    date: "01/07/2025",
    title: "Receita confirma substituição da DIRF por eSocial e EFD-Reinf",
    description: "Retenções e rendimentos passam a ser prestados por escriturações digitais, observados casos de contingência e cronogramas próprios.",
    sourceId: "fim-dirf-2025",
    tag: "Obrigações"
  },
  {
    date: "16/01/2025",
    title: "LC nº 214/2025 institui IBS, CBS e IS",
    description: "Marco infraconstitucional da Reforma Tributária do consumo, com regras de transição, não cumulatividade, split payment, cashback e obrigações.",
    sourceId: "lc-214-2025",
    tag: "Reforma"
  }
];
