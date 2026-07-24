import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://bagmitapokhrel.com.np",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://bagmitapokhrel.com.np/resume",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://bagmitapokhrel.com.np/privacy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}