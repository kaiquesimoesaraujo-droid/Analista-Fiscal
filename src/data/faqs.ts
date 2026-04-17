export type Faq = {
  question: string;
  answer: string;
  references: string[];
};

export const faqs: Faq[] = [
  {
    question: "Este portal substitui consultoria fiscal?",
    answer: "Não. O portal é educacional e operacional. Casos reais devem ser validados conforme legislação específica aplicável, especialmente quando envolver UF, município, benefício fiscal, regime especial ou valores relevantes.",
    references: ["ctn", "agenda-tributaria"]
  },
  {
    question: "Como validar se uma regra está vigente?",
    answer: "Use fonte oficial consolidada quando possível, confira atos alteradores, vigência e produção de efeitos. Para Receita Federal, consulte o SIJUT/Normas; para leis, use Planalto; para SPED, use o portal SPED; para ICMS, valide CONFAZ e UF.",
    references: ["constituicao", "ctn"]
  },
  {
    question: "ISS sempre depende de município?",
    answer: "Sim. A LC nº 116/2003 traz normas gerais, mas alíquota, retenção, cadastro e obrigação acessória dependem da lei e do portal do município competente.",
    references: ["lc-116-2003"]
  },
  {
    question: "ICMS-ST pode ser definido só pelo NCM?",
    answer: "Não. É preciso validar NCM, descrição, CEST, segmento, convênio/protocolo, UF de destino, MVA/PMPF e legislação estadual.",
    references: ["conv-icms-142-2018", "st-confaz"]
  },
  {
    question: "A DIRF ainda é a rotina principal de retenções?",
    answer: "A Receita Federal informou a substituição da DIRF por eSocial e EFD-Reinf. Em 2026 podem existir situações excepcionais de contingência, principalmente para órgãos públicos, que devem ser validadas em fontes oficiais.",
    references: ["fim-dirf-2025", "efd-reinf-manual", "esocial"]
  },
  {
    question: "Posso aplicar IBS/CBS como se fossem PIS/Cofins?",
    answer: "Não. CBS e IBS têm arquitetura própria na EC nº 132/2023 e na LC nº 214/2025, com transição, não cumulatividade ampla, split payment e regras específicas.",
    references: ["ec-132-2023", "lc-214-2025", "lc-227-2026"]
  }
];
