export type GlossaryTerm = {
  term: string;
  definition: string;
  related: string[];
};

export const glossary: GlossaryTerm[] = [
  { term: "IRRF", definition: "Imposto de Renda Retido na Fonte. Retenção feita pela fonte pagadora conforme natureza do rendimento, beneficiário e regra vigente.", related: ["RIR/2018", "EFD-Reinf", "eSocial"] },
  { term: "CSRF", definition: "Sigla prática para retenções de CSLL, Cofins e PIS/Pasep sobre pagamentos por determinados serviços.", related: ["Lei nº 10.833/2003", "IN SRF nº 459/2004"] },
  { term: "INSS retido", definition: "Retenção previdenciária incidente em serviços contratados mediante cessão de mão de obra ou empreitada, conforme legislação previdenciária.", related: ["Lei nº 8.212/1991", "IN RFB nº 2.110/2022"] },
  { term: "ISS", definition: "Imposto Sobre Serviços de competência municipal e do Distrito Federal, com normas gerais na LC nº 116/2003.", related: ["LC nº 116/2003", "NFS-e"] },
  { term: "ICMS", definition: "Imposto estadual sobre circulação de mercadorias e prestações de transporte interestadual/intermunicipal e comunicação.", related: ["LC nº 87/1996", "RICMS da UF"] },
  { term: "IPI", definition: "Imposto federal sobre produtos industrializados, ligado à industrialização, importação e saída de estabelecimento industrial ou equiparado.", related: ["Ripi/2010", "TIPI"] },
  { term: "CBS", definition: "Contribuição Social sobre Bens e Serviços, de competência da União, criada no contexto da Reforma Tributária do consumo.", related: ["EC nº 132/2023", "LC nº 214/2025"] },
  { term: "IBS", definition: "Imposto sobre Bens e Serviços, de competência compartilhada entre Estados, Municípios e Distrito Federal.", related: ["EC nº 132/2023", "LC nº 214/2025"] },
  { term: "IS", definition: "Imposto Seletivo incidente sobre bens e serviços prejudiciais à saúde ou ao meio ambiente, conforme legislação da Reforma Tributária.", related: ["LC nº 214/2025"] },
  { term: "Split payment", definition: "Mecanismo de segregação e recolhimento de IBS/CBS em operações de pagamento, sujeito a regulamentação operacional.", related: ["LC nº 214/2025", "LC nº 227/2026"] },
  { term: "Cashback", definition: "Devolução de parte dos tributos a pessoas físicas em hipóteses legais da Reforma Tributária.", related: ["EC nº 132/2023", "LC nº 214/2025"] },
  { term: "EFD", definition: "Escrituração Fiscal Digital. Em ICMS/IPI, arquivo do SPED com documentos, apurações, ajustes e registros fiscais.", related: ["SPED", "PVA", "Guia Prático"] },
  { term: "EFD-Reinf", definition: "Escrituração Fiscal Digital de Retenções e Outras Informações Fiscais, módulo do SPED para retenções e rendimentos não cobertos pelo eSocial.", related: ["R-4000", "DCTFWeb"] },
  { term: "CFOP", definition: "Código Fiscal de Operações e Prestações. Classifica entradas, saídas e aquisições/prestações nos documentos e livros fiscais.", related: ["Convênio SINIEF s/nº de 1970"] },
  { term: "CST", definition: "Código de Situação Tributária. Indica o tratamento tributário do item ou operação para ICMS, IPI, PIS/Cofins, conforme tabela aplicável.", related: ["Convênio SINIEF", "EFD"] },
  { term: "NCM", definition: "Nomenclatura Comum do Mercosul. Classificação fiscal de mercadorias usada em documentos fiscais, tributos e comércio exterior.", related: ["TIPI", "CEST"] },
  { term: "CEST", definition: "Código Especificador da Substituição Tributária. Identifica bens e mercadorias passíveis de ST conforme Convênio ICMS 142/2018.", related: ["ST", "MVA"] },
  { term: "MVA", definition: "Margem de Valor Agregado usada para formar a base de cálculo do ICMS-ST, podendo ser ajustada em operações interestaduais.", related: ["ICMS-ST", "UF de destino"] },
  { term: "DIFAL", definition: "Diferencial de alíquotas do ICMS em operações interestaduais, com regras que dependem da Constituição, LC nº 87/1996 e legislação estadual.", related: ["ICMS", "EC nº 87/2015"] },
  { term: "DCTFWeb", definition: "Declaração que consolida débitos e créditos tributários federais, com geração de DARF a partir de escriturações como eSocial e EFD-Reinf.", related: ["DARF", "eSocial", "EFD-Reinf"] }
].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
