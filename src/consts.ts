// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Cedric Accard';
export const SITE_DESCRIPTION = 'My academic portfolio.';

export const CV_URL = 'https://cedric-accard.github.io/public/CV_academia.pdf';

export const CONTACT = {
  organization: 'Cedric Accard',
  addressLines: [
    'Observatoire Astronomique de Strasbourg',
  ],
  emails: [
    'cedric.accard@astro.unsitra.fr',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'GitHub',
    href: 'https://github.com/Cedric-Accard/',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:cedric.accard@astro.unsitra.fr',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cedricaccard6/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/caccrd29',
    icon: 'twitter',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Open Source',
  sourceUrl: 'https://github.com/shravanngoswamii/astro-scholar',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
