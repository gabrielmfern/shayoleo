export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/*",
    },
    sitemap: "https://leonardsite.vercel.app/sitemap.xml",
  };
}
