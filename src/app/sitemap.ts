import type { MetadataRoute } from "next";

const BASE_URL = "https://fsrrecoverygroups.co.uk";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  // Main pages
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },

  // Services
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/vehicle-breakdown-recovery", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/roadside-assistance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/jumpstart-services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/winch-out", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/accident-emergency-assistance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/changing-spare-tyre", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/refueling", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/vehicle-transporting", changeFrequency: "monthly", priority: 0.8 },

  // Areas
  { path: "/areas", changeFrequency: "monthly", priority: 0.8 },

  // Areas: Cities & Towns
  { path: "/areas/newcastle", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/durham", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/darlington", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/sunderland", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/peterlee", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/middlesbrough", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/thirsk", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/northallerton", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/ripon", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/catterick", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/barnard-castle", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/bishop-auckland", changeFrequency: "monthly", priority: 0.6 },

  // Areas: Main Roads
  { path: "/areas/a1m", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/a66", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/a19", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/a67", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/a68", changeFrequency: "monthly", priority: 0.6 },
  { path: "/areas/a167", changeFrequency: "monthly", priority: 0.6 },

  // Legal
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
