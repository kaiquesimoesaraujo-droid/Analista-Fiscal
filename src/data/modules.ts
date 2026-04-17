import { fundamentosTributarios } from "./module-data/fundamentos-tributarios";
import { irrf } from "./module-data/irrf";
import { pisCofinsCsllRetidos } from "./module-data/pis-cofins-csll-retidos";
import { inssRetido } from "./module-data/inss-retido";
import { iss } from "./module-data/iss";
import { icmsIpiNfeEfdSt } from "./module-data/icms-ipi-nfe-efd-st";
import { reformaTributaria } from "./module-data/reforma-tributaria";
import { casosPraticosModulo } from "./module-data/casos-praticos";
import type { TrainingModule, QuizQuestion } from "./moduleTypes";

export type { TrainingModule, QuizQuestion };

export const modules: TrainingModule[] = [
  fundamentosTributarios,
  irrf,
  pisCofinsCsllRetidos,
  inssRetido,
  iss,
  icmsIpiNfeEfdSt,
  reformaTributaria,
  casosPraticosModulo
];

export const moduleBySlug = Object.fromEntries(modules.map((module) => [module.slug, module])) as Record<string, TrainingModule>;
