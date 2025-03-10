import { defineConfig } from "vitepress";
import * as locales from "./locales/index.ts";

export default defineConfig({
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    typographer: true,
    image: { lazyLoading: true },
  },
  locales: {
    ...locales.docsEn,
    ...locales.docsUk,
  },
  themeConfig: {
    siteTitle: "Embroidery Studio",
    externalLinkIcon: true,
  },
});
