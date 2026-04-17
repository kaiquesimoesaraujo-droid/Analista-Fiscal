export type LegalReference = {
  id: string;
  title: string;
  url: string;
  source: string;
  category: string;
  status: string;
  topics: string[];
  note: string;
};

export const legalRefs: LegalReference[] = [
  {
    id: "constituicao",
    title: "Constituição Federal de 1988",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    source: "Planalto",
    category: "Sistema Tributário Nacional",
    status: "Texto constitucional consolidado. Vigência permanente, com alterações posteriores.",
    topics: ["competência tributária", "limitações ao poder de tributar", "reforma tributária", "ICMS", "ISS", "IPI"],
    note: "Usar como ponto de partida para competência, princípios e regras constitucionais. Validar em conjunto com emendas e leis complementares."
  },
  {
    id: "ec-132-2023",
    title: "Emenda Constitucional nº 132/2023",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm",
    source: "Planalto",
    category: "Reforma Tributária",
    status: "Vigente, com regras de transição e produção de efeitos escalonada.",
    topics: ["CBS", "IBS", "IS", "transição", "cashback", "não cumulatividade"],
    note: "Altera o Sistema Tributário Nacional e estrutura a transição dos tributos sobre consumo."
  },
  {
    id: "lc-214-2025",
    title: "Lei Complementar nº 214/2025",
    url: "https://planalto.gov.br/ccivil_03/Leis/LCP/Lcp214.htm",
    source: "Planalto",
    category: "Reforma Tributária",
    status: "Vigente. Possui produção de efeitos faseada e alterações posteriores, inclusive pela LC nº 227/2026.",
    topics: ["IBS", "CBS", "Imposto Seletivo", "split payment", "cashback", "documento fiscal eletrônico", "Comitê Gestor"],
    note: "Fonte central para IBS, CBS e IS. Como há transição, validar data de produção de efeitos antes de aplicar em operação real."
  },
  {
    id: "lc-227-2026",
    title: "Lei Complementar nº 227/2026",
    url: "https://www.planalto.gov.br/ccivil_03/Leis/LCP/Lcp227.htm",
    source: "Planalto",
    category: "Reforma Tributária",
    status: "Vigente desde 2026, alterando dispositivos da LC nº 214/2025.",
    topics: ["IBS", "CBS", "split payment", "cadastro", "operações com bens e serviços"],
    note: "Usar para checar redação atual da LC nº 214/2025 quando o tema envolver dispositivos alterados em 2026."
  },
  {
    id: "ctn",
    title: "Código Tributário Nacional - Lei nº 5.172/1966",
    url: "https://www.planalto.gov.br/ccivil_03/leis/L5172Compilado.htm",
    source: "Planalto",
    category: "Sistema Tributário Nacional",
    status: "Vigente como lei complementar material, com alterações posteriores.",
    topics: ["tributo", "fato gerador", "obrigação tributária", "responsabilidade", "crédito tributário"],
    note: "Base conceitual para fato gerador, obrigação principal/acessória, responsabilidade e crédito tributário."
  },
  {
    id: "rir-2018",
    title: "Regulamento do Imposto sobre a Renda - Decreto nº 9.580/2018",
    url: "https://www.planalto.gov.br/CCIVIL_03/_Ato2015-2018/2018/Decreto/D9580.htm",
    source: "Planalto",
    category: "IRRF",
    status: "Vigente, mas consolida legislação até 31/12/2016. Conferir leis posteriores e normas da Receita.",
    topics: ["IRRF", "rendimentos", "serviços profissionais", "aluguéis", "trabalho assalariado"],
    note: "Usar com cautela para regras operacionais atuais, pois tabelas e obrigações acessórias foram alteradas depois de 2016."
  },
  {
    id: "irpf-2026",
    title: "Tabelas de incidência do IRPF 2026",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026",
    source: "Receita Federal",
    category: "IRRF",
    status: "Página oficial atualizada em 06/02/2026, aplicável ao ano-calendário 2026 conforme indicado pela Receita.",
    topics: ["tabela progressiva", "IRRF", "dedução por dependente", "desconto simplificado", "Lei nº 15.270/2025"],
    note: "Usar para retenções sobre rendimentos sujeitos à tabela progressiva em 2026."
  },
  {
    id: "lei-9430-1996",
    title: "Lei nº 9.430/1996",
    url: "https://www.planalto.gov.br/ccivil_03/Leis/L9430.htm",
    source: "Planalto",
    category: "Retenções Federais",
    status: "Vigente com alterações posteriores.",
    topics: ["IRRF", "dispensa de retenção", "DARF", "retenção por órgãos públicos"],
    note: "Consultar especialmente as regras de dispensa de retenção de IRRF e vedações relativas a DARF de baixo valor."
  },
  {
    id: "lei-10833-2003",
    title: "Lei nº 10.833/2003",
    url: "https://www.planalto.gov.br/ccivil_03/LEIS/2003/L10.833compilado.htm",
    source: "Planalto",
    category: "PIS/COFINS/CSLL",
    status: "Texto compilado vigente, com alterações posteriores.",
    topics: ["PIS", "COFINS", "CSLL", "retenção", "serviços", "órgãos públicos"],
    note: "Base legal das retenções de CSLL, Cofins e PIS/Pasep em pagamentos por serviços e fornecimentos."
  },
  {
    id: "in-srf-459-2004",
    title: "Instrução Normativa SRF nº 459/2004",
    url: "https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?termoBusca=Instru%C3%A7%C3%A3o%20Normativa%20SRF%20459%202004%20reten%C3%A7%C3%A3o%20tributos%20contribui%C3%A7%C3%B5es",
    source: "Receita Federal - Normas",
    category: "PIS/COFINS/CSLL",
    status: "Consultar no sistema de Normas da Receita para confirmar vigência e alterações.",
    topics: ["retenção 4,65%", "serviços profissionais", "CSLL", "Cofins", "PIS/Pasep"],
    note: "Norma operacional para retenções entre pessoas jurídicas de direito privado; validar atos alteradores no SIJUT."
  },
  {
    id: "in-srf-475-2004",
    title: "Instrução Normativa SRF nº 475/2004",
    url: "https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?termoBusca=Instru%C3%A7%C3%A3o%20Normativa%20SRF%20475%202004%20reten%C3%A7%C3%A3o%20CSLL%20Cofins%20PIS",
    source: "Receita Federal - Normas",
    category: "PIS/COFINS/CSLL",
    status: "Consultar no sistema de Normas da Receita para confirmar vigência e alterações.",
    topics: ["Estados", "municípios", "Distrito Federal", "retenção de contribuições"],
    note: "Aplicável a retenções por órgãos da administração direta, autarquias e fundações de Estados, DF e Municípios quando atendidos os pressupostos normativos."
  },
  {
    id: "in-rfb-1234-2012",
    title: "Instrução Normativa RFB nº 1.234/2012",
    url: "https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?anoAtoFacet=2012&ano_ato=2012&somente_atos_vigentes=on&termoBusca=Instru%C3%A7%C3%A3o%20Normativa%20RFB%201234",
    source: "Receita Federal - Normas",
    category: "Retenções Federais",
    status: "Norma vigente indicada no sistema de Normas da Receita; validar alterações por ato posterior.",
    topics: ["órgãos públicos federais", "IRRF", "CSLL", "Cofins", "PIS/Pasep"],
    note: "Referência para retenções em pagamentos efetuados por órgãos e entidades da administração pública federal e hipóteses abrangidas."
  },
  {
    id: "lei-8212-1991",
    title: "Lei nº 8.212/1991",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm",
    source: "Planalto",
    category: "INSS",
    status: "Vigente com alterações posteriores.",
    topics: ["contribuição previdenciária", "retenção de 11%", "cessão de mão de obra", "empreitada"],
    note: "Base legal da retenção previdenciária sobre serviços contratados mediante cessão de mão de obra ou empreitada."
  },
  {
    id: "in-rfb-2110-2022",
    title: "Instrução Normativa RFB nº 2.110/2022",
    url: "https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?termoBusca=Instru%C3%A7%C3%A3o%20Normativa%20RFB%202110%202022%20tributa%C3%A7%C3%A3o%20previdenci%C3%A1ria",
    source: "Receita Federal - Normas",
    category: "INSS",
    status: "Vigente, com alterações posteriores. Em 2025 houve consolidação de hipóteses de dispensa.",
    topics: ["retenção previdenciária", "cessão de mão de obra", "empreitada", "Simples Nacional", "construção civil"],
    note: "Consultar redação atualizada no SIJUT antes de aplicar dispensa ou enquadramento de serviço."
  },
  {
    id: "lc-116-2003",
    title: "Lei Complementar nº 116/2003",
    url: "https://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp116.htm",
    source: "Planalto",
    category: "ISS",
    status: "Vigente, com alterações e produção de efeitos vinculadas à reforma tributária.",
    topics: ["ISS", "lista de serviços", "local de recolhimento", "retenção", "alíquota mínima"],
    note: "Regra nacional do ISS. A aplicação prática depende da lei do município competente."
  },
  {
    id: "lc-123-2006",
    title: "Lei Complementar nº 123/2006",
    url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm",
    source: "Planalto",
    category: "Simples Nacional",
    status: "Vigente com alterações, inclusive regras de produção de efeitos ligadas à LC nº 214/2025.",
    topics: ["Simples Nacional", "ME", "EPP", "ISS", "ICMS", "retenções"],
    note: "Usar em conjunto com Resoluções do CGSN e regras locais para retenção de ISS/ICMS quando cabível."
  },
  {
    id: "res-cgsn-140-2018",
    title: "Resolução CGSN nº 140/2018",
    url: "https://normas.receita.fazenda.gov.br/sijut2consulta/consulta.action?orgaosSelecionados=CGSN&tipoData=2&tiposAtosSelecionados=67&termoBusca=Resolu%C3%A7%C3%A3o%20CGSN%20140",
    source: "Receita Federal - Normas / CGSN",
    category: "Simples Nacional",
    status: "Regulamento do Simples Nacional. Consultar redação vigente no SIJUT.",
    topics: ["Simples Nacional", "retenção", "CNAE impeditivo", "obrigações"],
    note: "Relevante para retenções de optantes do Simples e para validação de anexos/CNAE."
  },
  {
    id: "lc-87-1996",
    title: "Lei Complementar nº 87/1996",
    url: "https://www.planalto.gov.br/ccivil_03/Leis/LCP/Lcp87.htm",
    source: "Planalto",
    category: "ICMS",
    status: "Vigente, com alterações e efeitos de transição pela LC nº 214/2025.",
    topics: ["ICMS", "crédito", "não cumulatividade", "base de cálculo", "transferências", "exportação"],
    note: "Regra nacional do ICMS. A escrituração, prazos, benefícios e alíquotas dependem da legislação estadual."
  },
  {
    id: "convenio-sn-1970",
    title: "Convênio SINIEF s/nº de 1970",
    url: "https://www.confaz.fazenda.gov.br/legislacao/ajustes/sinief/cvsn_70",
    source: "CONFAZ",
    category: "Documentos fiscais",
    status: "Vigente com muitas alterações por Ajustes SINIEF.",
    topics: ["CFOP", "CST", "documentos fiscais", "livros fiscais"],
    note: "Base para códigos fiscais e situação tributária. Sempre conferir alterações e tabelas atualizadas."
  },
  {
    id: "cfop",
    title: "Tabela CFOP - Convênio SINIEF s/nº de 1970",
    url: "https://www.confaz.fazenda.gov.br/legislacao/ajustes/sinief/copy_of_cfop_cvsn_70_nova",
    source: "CONFAZ",
    category: "Documentos fiscais",
    status: "Tabela oficial de referência; validar efeitos de revogações e ajustes posteriores.",
    topics: ["CFOP", "entradas", "saídas", "natureza da operação"],
    note: "CFOP deve refletir a operação real. UF pode exigir detalhamentos e campos adicionais."
  },
  {
    id: "ajuste-sinief-07-2005",
    title: "Ajuste SINIEF 07/2005",
    url: "https://www.confaz.fazenda.gov.br/legislacao/ajustes/2005/aj_007_05",
    source: "CONFAZ",
    category: "NF-e",
    status: "Vigente com alterações, incluindo ajustes de 2025.",
    topics: ["NF-e", "DANFE", "autorização de uso", "credenciamento", "contingência"],
    note: "Institui a NF-e modelo 55 e o DANFE. Operacionalização depende de MOC, notas técnicas e legislação da UF."
  },
  {
    id: "ajuste-sinief-02-2009",
    title: "Ajuste SINIEF 02/2009",
    url: "https://www.confaz.fazenda.gov.br/legislacao/ajustes/2009/AJ_002_09",
    source: "CONFAZ",
    category: "EFD ICMS/IPI",
    status: "Vigente com alterações.",
    topics: ["EFD ICMS/IPI", "PVA", "CFOP", "CST", "tabelas estaduais"],
    note: "Institui regras gerais da EFD ICMS/IPI e remete a tabelas e códigos oficiais."
  },
  {
    id: "efd-icms-ipi-322",
    title: "Guia Prático EFD ICMS/IPI versão 3.2.2",
    url: "https://sped.rfb.gov.br/item/show/8114",
    source: "SPED",
    category: "EFD ICMS/IPI",
    status: "Publicado em 25/03/2026, com vigência a partir de janeiro/2026 conforme notícia oficial.",
    topics: ["EFD", "ICMS", "IPI", "Registro C100", "Reforma Tributária"],
    note: "Inclui orientação sobre documentos fiscais com informações dos novos tributos da Reforma Tributária do Consumo."
  },
  {
    id: "efd-reinf-manual",
    title: "Manual de Orientação da EFD-Reinf",
    url: "https://sped.rfb.gov.br/item/show/2225",
    source: "SPED",
    category: "EFD-Reinf",
    status: "Página oficial de manuais; consultar versão vigente antes de transmitir eventos.",
    topics: ["EFD-Reinf", "retenções", "R-4000", "DCTFWeb", "DIRF"],
    note: "Usar para eventos de retenções federais, em complemento ao eSocial."
  },
  {
    id: "reinf-servico",
    title: "Serviço EFD-Reinf no gov.br",
    url: "https://www.gov.br/pt-br/servicos/efd-reinf",
    source: "Gov.br / Receita Federal",
    category: "EFD-Reinf",
    status: "Serviço atualizado em 15/12/2025.",
    topics: ["retenções", "rendimentos pagos", "eSocial", "SPED"],
    note: "Página oficial de serviço para entrega da Escrituração Fiscal Digital de Retenções e Outras Informações Fiscais."
  },
  {
    id: "fim-dirf-2025",
    title: "Fim da DIRF e uso de eSocial/EFD-Reinf",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2025/julho/a-declaracao-do-imposto-sobre-a-renda-retido-na-fonte-dirf-nao-sera-mais-utilizada",
    source: "Receita Federal",
    category: "Obrigações acessórias",
    status: "Notícia oficial publicada em 01/07/2025 e atualizada em 03/07/2025.",
    topics: ["DIRF", "eSocial", "EFD-Reinf", "retenções"],
    note: "A declaração deixa de ser utilizada e as informações passam a ser prestadas via eSocial e EFD-Reinf, observados casos excepcionais."
  },
  {
    id: "esocial",
    title: "Portal eSocial",
    url: "https://www.gov.br/esocial/pt-br",
    source: "eSocial",
    category: "Obrigações acessórias",
    status: "Portal oficial com leiautes e notas técnicas atualizados.",
    topics: ["folha de pagamento", "IRRF trabalho", "contribuições previdenciárias", "FGTS"],
    note: "Usar para rendimentos do trabalho, eventos trabalhistas/previdenciários e retenções de folha."
  },
  {
    id: "conv-icms-142-2018",
    title: "Convênio ICMS 142/2018",
    url: "https://www.confaz.fazenda.gov.br/legislacao/convenios/2018/CV142_18",
    source: "CONFAZ",
    category: "Substituição Tributária",
    status: "Vigente com alterações até 2024 indicadas na página oficial; validar alterações posteriores.",
    topics: ["ICMS-ST", "CEST", "MVA", "antecipação", "ressarcimento"],
    note: "Regime geral nacional de ST. Aplicação concreta depende de convênio/protocolo e legislação da UF de destino."
  },
  {
    id: "st-confaz",
    title: "Portal CONFAZ - Substituição Tributária",
    url: "https://www.confaz.fazenda.gov.br/legislacao/substituicao-tributaria",
    source: "CONFAZ",
    category: "Substituição Tributária",
    status: "Página oficial de referência para convênios e PNST.",
    topics: ["ST", "PNST", "CEST", "MVA"],
    note: "Usar como porta de entrada para convênios, protocolos e listas de bens sujeitos à ST."
  },
  {
    id: "ripi-2010",
    title: "Regulamento do IPI - Decreto nº 7.212/2010",
    url: "https://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2010/Decreto/D7212.htm",
    source: "Planalto",
    category: "IPI",
    status: "Vigente com alterações posteriores.",
    topics: ["IPI", "industrialização", "base de cálculo", "créditos", "estabelecimento equiparado"],
    note: "Base regulamentar para incidência, industrialização, créditos e obrigações do IPI."
  },
  {
    id: "tipi",
    title: "TIPI - Tabela de Incidência do IPI",
    url: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/tipi-tabela-de-incidencia-do-imposto-sobre-produtos-industrializados",
    source: "Receita Federal",
    category: "IPI",
    status: "Página oficial da TIPI. Arquivos atualizados em 2026 conforme Receita.",
    topics: ["TIPI", "NCM", "alíquota IPI"],
    note: "Usar sempre a tabela vigente e validar ADEs/Decretos que alterem alíquotas."
  },
  {
    id: "ipi-receita",
    title: "Orientações da Receita Federal sobre IPI",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos/ipi",
    source: "Receita Federal",
    category: "IPI",
    status: "Orientação oficial atualizada em 21/08/2023.",
    topics: ["fato gerador", "contribuinte", "base de cálculo", "prazo de recolhimento"],
    note: "Página didática para consulta rápida; a base normativa continua sendo Ripi, TIPI e leis aplicáveis."
  },
  {
    id: "agenda-tributaria",
    title: "Agenda Tributária da Receita Federal",
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/agenda-tributaria",
    source: "Receita Federal",
    category: "Prazos",
    status: "Atualização mensal; validar sempre no mês da apuração.",
    topics: ["DARF", "DCTFWeb", "MIT", "Reinf", "eSocial", "prazos"],
    note: "Fonte operacional para vencimentos. O prazo efetivo pode depender de feriado, agenda mensal e tipo de tributo."
  }
];

export const legalById = Object.fromEntries(legalRefs.map((reference) => [reference.id, reference])) as Record<string, LegalReference>;

export const legalCategories = Array.from(new Set(legalRefs.map((reference) => reference.category))).sort((a, b) => a.localeCompare(b, "pt-BR"));
