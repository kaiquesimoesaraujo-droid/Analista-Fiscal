import { modules } from "@data/modules";
import { legalRefs } from "@data/legal";
import { glossary } from "@data/glossary";
import { caseStudies } from "@data/cases";

export function GET() {
  const moduleItems = modules.map((module) => ({
    type: "Módulo",
    title: module.title,
    summary: module.summary,
    keywords: [...module.learningGoals, ...module.commonMistakes, ...module.submodules.flatMap((item) => item.topics)].join(" "),
    href: `modulos/${module.slug}/`
  }));

  const legalItems = legalRefs.map((reference) => ({
    type: "Base legal",
    title: reference.title,
    summary: reference.note,
    keywords: reference.topics.join(" "),
    href: "biblioteca-legal/"
  }));

  const glossaryItems = glossary.map((term) => ({
    type: "Glossário",
    title: term.term,
    summary: term.definition,
    keywords: term.related.join(" "),
    href: `glossario/#${term.term.toLowerCase().replaceAll(" ", "-")}`
  }));

  const caseItems = caseStudies.map((study) => ({
    type: "Caso prático",
    title: study.title,
    summary: study.scenario,
    keywords: [...study.route, ...study.checklist].join(" "),
    href: "casos-praticos/"
  }));

  return new Response(JSON.stringify([...moduleItems, ...legalItems, ...glossaryItems, ...caseItems]), {
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}
