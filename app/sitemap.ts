import type { MetadataRoute } from "next";

import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zanuri-technologies.example";

  const staticRoutes = ["", "/about", "/services", "/process", "/industries", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
    })),
  ];
}
