import type { LocaleConfig } from "vitepress";
import { socials } from "../shared/index.ts";

const download = {
  text: "Download",
  link: "/en/download",
};

const guide = {
  text: "Guide",
  items: [],
};

const reference = {
  text: "Reference",
  items: [
    {
      text: "Shortcuts",
      link: "/en/reference/shortcuts",
    },
    {
      text: "Interaction with the pattern viewport",
      link: "/en/reference/pattern-viewport",
    },
  ],
};

export const docsEn: LocaleConfig = {
  en: {
    label: "English",
    lang: "en-US",
    title: "Embroiderly",
    description: "A free, open-source, cross-platform desktop application for designing cross-stitch patterns.",
    themeConfig: {
      nav: [download, guide, reference],
      sidebar: {
        "/en/guide/": [{ collapsed: false, ...guide }],
        "/en/reference/": [{ collapsed: false, ...reference }],
      },
      outline: {
        level: [1, 6],
        label: "On this page",
      },
      docFooter: {
        prev: "Previous page",
        next: "Next page",
      },
      lastUpdatedText: "Last updated",
      darkModeSwitchLabel: "Appearance", // Only displayed in the mobile view.
      sidebarMenuLabel: "Menu", // Only displayed in the mobile view.
      returnToTopLabel: "Return to top", // Only displayed in the mobile view.
      langMenuLabel: "Change language", // Aria-label.
      lightModeSwitchTitle: "Switch to light theme",
      darkModeSwitchTitle: "Switch to dark theme",
      socialLinks: [
        {
          link: socials.telegram.link,
          icon: socials.telegram.icon,
          ariaLabel: "Link to the Embroiderly community group in Telegram",
        },
        {
          link: socials.github.link,
          icon: socials.github.icon,
          ariaLabel: "Link to the Embroiderly repository on GitHub",
        },
      ],
      notFound: {
        code: "404",
        title: "PAGE NOT FOUND",
        linkText: "Go to home",
        linkLabel: "Go to home", // Aria-label.
        quote: "", // Don't specify the quote.
      },
      footer: {
        message: `This website is released under the <a href="https://github.com/embroidery-space/documentation/blob/main/LICENSE">CC-BY-SA-4.0 License</a>.
          </br>Embroiderly is released under the <a href="https://github.com/embroidery-space/embroiderly/blob/main/LICENSE">GPL-3.0-or-later License</a>.`,
        copyright:
          'Copyright © 2024-present <a href="https://github.com/niusia-ua">Nazar Antoniuk</a> and Embroiderly contributors',
      },
    },
  },
};
