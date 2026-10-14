import { business } from "@/data/business";

export const SITE_URL = "https://fsrrecoverygroups.co.uk";
export const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * The verified FSR Recovery Group business entity, declared with the same
 * @id on every page so Google can treat them as references to the same
 * real-world business rather than separate, unrelated LocalBusiness nodes.
 * Each page still ships this inline (rather than a bare @id pointer) so the
 * page's own JSON-LD stays independently valid.
 */
export const businessEntityRef = {
  "@type": "AutomotiveBusiness",
  "@id": BUSINESS_ID,
  name: business.name,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    postalCode: business.address.postalCode,
    addressCountry: business.address.countryCode,
  },
} as const;

type BreadcrumbItem = { name: string; path: string };

/** BreadcrumbList matching the site's real header-nav hierarchy (Home > section > page). */
export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
