import { legalById } from "./legal";

export const legalLink = (id: string, label: string) => `<a href="${legalById[id].url}">${label}</a>`;
