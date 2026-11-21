import type { MetadataRoute } from "next";

const siteUrl = "https://indelibletech.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/portfolio",
    "/pricing",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/sitemap",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : ["/solutions", "/portfolio", "/services", "/contact"].includes(route) ? 0.8 : 0.5,
  }));
}
