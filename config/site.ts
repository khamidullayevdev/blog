export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blog",
  description: "Blog",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ],
  links: {
    github: "https://github.com/khamidullayevdev",
    twitter: "https://x.com/khamidev",
  },
};
