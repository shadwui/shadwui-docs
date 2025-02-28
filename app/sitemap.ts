import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shadwui-docs-xlaq.vercel.app";
  const lastModified = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/authentication`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs/install`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/dark-mode`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/installation/nextjs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/installation/react`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/installation/manual`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/authentication/neon`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/authentication/prisma`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/typography/heading`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/typography/description`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/alert`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/badge`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/banner`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/breadcrumb`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/button`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/checkbox`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/notification`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/radio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/select`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/slider`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/switch`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components/textarea`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/templates/template-01`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/templates/template-02`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/components`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/blocks`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/templates`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/docs/authentication/mongodb/introduction`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: `${baseUrl}/docs/authentication/mongodb/model`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: `${baseUrl}/docs/blocks/hero/hero-01`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: `${baseUrl}/docs/blocks/footer/footer`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.51,
    },
    {
      url: `${baseUrl}/docs/authentication/mongodb/setup`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.41,
    },
    {
      url: `${baseUrl}/docs/authentication/mongodb/database`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.41,
    },
    {
      url: `${baseUrl}/docs/authentication/mongodb/api`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.41,
    },
    {
      url: `${baseUrl}/docs/authentication/mongodb/frontend`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.41,
    },
    {
      url: `${baseUrl}/docs/authentication/mongodb/route`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.41,
    },
    {
      url: `${baseUrl}/docs/blocks/hero/hero-02`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.41,
    },
    {
      url: `${baseUrl}/docs/blocks/navbar/navbar-01`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.41,
    },
    {
      url: `${baseUrl}/docs/blocks/login/login-01`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.33,
    },
  ];
}

export const dynamic = "force-static";
