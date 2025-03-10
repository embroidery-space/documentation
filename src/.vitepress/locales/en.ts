import type { LocaleConfig } from "vitepress";
import { socials } from "../shared/index.ts";

const guide = {
  text: "Guide",
  items: [
    {
      text: "Installation",
      link: "/guide/installation",
    },
  ],
};

export const docsEn: LocaleConfig = {
  root: {
    label: "English",
    lang: "en-US",
    title: "Embroidery Studio",
    description: "A free, open-source, cross-platform desktop application for designing cross-stitch patterns.",
    themeConfig: {
      nav: [guide],
      sidebar: {
        "/guide/": [{ collapsed: false, ...guide }],
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
          ariaLabel: "Link to the Embroidery Studio community group in Telegram",
        },
        {
          link: socials.github.link,
          icon: socials.github.icon,
          ariaLabel: "Link to the Embroidery Studio repository on GitHub",
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
        message:
          'Released under the <a href="https://github.com/embroidery-space/embroidery-studio/blob/main/LICENSE">GNU GPLv3 License</a>.',
        copyright: 'Copyright © 2024-present <a href="https://github.com/niusia-ua">Nazar Antoniuk</a>',
      },
    },
  },
};
