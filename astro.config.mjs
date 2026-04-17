import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const runningOnPages = Boolean(process.env.GITHUB_ACTIONS && repository && owner);

export default defineConfig({
  site: process.env.SITE_URL ?? (runningOnPages ? `https://${owner}.github.io` : "https://example.github.io"),
  base: process.env.BASE_PATH ?? (runningOnPages ? `/${repository}` : "/"),
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
