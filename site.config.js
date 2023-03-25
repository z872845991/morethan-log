const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Jesse Wang",
    image: "/xiaolanshu-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Student",
    bio: "I like doing something amazing.",
    email: "z872845991@gmail.com",
    github: "z872845991",
	instagram: "",
  },
  projects: [
    {
      name: `xiaolanshu-log`,
      href: "https://github.com/z872845991/xiaolanshu-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "xiaolanshu-log",
    description: "welcome to xiaolanshu-log!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
	link: "http://little-shu.com",
  since: 2023, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
