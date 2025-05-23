import type { LocaleConfig } from "vitepress";
import { socials } from "../shared/index.ts";

const guide = {
  text: "Посібник",
  items: [
    {
      text: "Встановлення",
      link: "/uk/guide/installation",
    },
  ],
};

const reference = {
  text: "Довідка",
  items: [
    {
      text: "Взаємодія із зоною перегляду схеми",
      link: "/uk/reference/pattern-viewport",
    },
  ],
};

export const docsUk: LocaleConfig = {
  uk: {
    label: "Українська",
    lang: "uk-UA",
    title: "Embroiderly",
    description:
      "Безкоштовний, відкритий, кросплатформний компʼютерний застосунок для створення схем вишивок хрестиком.",
    themeConfig: {
      nav: [guide, reference],
      sidebar: {
        "/uk/guide/": [{ collapsed: false, ...guide }],
        "/uk/reference/": [{ collapsed: false, ...reference }],
      },
      outline: {
        level: [1, 6],
        label: "На цій сторінці",
      },
      docFooter: {
        prev: "Попередня сторінка",
        next: "Наступна сторінка",
      },
      lastUpdatedText: "Востаннє оновлено",
      darkModeSwitchLabel: "Вигляд", // Only displayed in the mobile view.
      sidebarMenuLabel: "Меню", // Only displayed in the mobile view.
      returnToTopLabel: "До гори", // Only displayed in the mobile view.
      langMenuLabel: "Змінити мову", // Aria-label.
      lightModeSwitchTitle: "Переключитися на світлу тему",
      darkModeSwitchTitle: "Переключитися на темну тему",
      socialLinks: [
        {
          link: socials.telegram.link,
          icon: socials.telegram.icon,
          ariaLabel: "Посилання на групу спільноти Embroiderly у Telegram",
        },
        {
          link: socials.github.link,
          icon: socials.github.icon,
          ariaLabel: "Посилання на репозиторій Embroiderly у GitHub",
        },
      ],
      notFound: {
        code: "404",
        title: "СТОРІНКУ НЕ ЗНАЙДЕНО",
        linkText: "Повернутися на головну",
        linkLabel: "Повернутися на головну", // Aria-label.
        quote: "", // Don't specify the quote.
      },
      footer: {
        message: `Цей вебсайт випущено під <a href="https://github.com/embroidery-space/documentation/blob/main/LICENSE">ліцензією CC-BY-SA-4.0</a>.
          </br>Embroiderly випущено під <a href="https://github.com/embroidery-space/embroiderly/blob/main/LICENSE">ліцензією GPL-3.0-or-later</a>.`,
        copyright:
          'Авторське право © 2024-дотепер <a href="https://github.com/niusia-ua">Nazar Antoniuk</a> і контрибʼютори Embroiderly',
      },
    },
  },
};
