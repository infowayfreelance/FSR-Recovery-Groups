export type AreaNavigationItem = {
  key: string;
  label: string;
  href: string;
  category: "city" | "road";
};

export const areaNavigation: AreaNavigationItem[] = [
  { key: "newcastle", label: "Newcastle", href: "/areas/newcastle", category: "city" },
  { key: "durham", label: "Durham", href: "/areas/durham", category: "city" },
  { key: "darlington", label: "Darlington", href: "/areas/darlington", category: "city" },
  { key: "sunderland", label: "Sunderland", href: "/areas/sunderland", category: "city" },
  { key: "peterlee", label: "Peterlee", href: "/areas/peterlee", category: "city" },
  { key: "middlesbrough", label: "Middlesbrough", href: "/areas/middlesbrough", category: "city" },
  { key: "thirsk", label: "Thirsk", href: "/areas/thirsk", category: "city" },
  { key: "northallerton", label: "Northallerton", href: "/areas/northallerton", category: "city" },
  { key: "ripon", label: "Ripon", href: "/areas/ripon", category: "city" },
  { key: "catterick", label: "Catterick", href: "/areas/catterick", category: "city" },
  { key: "barnard-castle", label: "Barnard Castle", href: "/areas/barnard-castle", category: "city" },
  { key: "bishop-auckland", label: "Bishop Auckland", href: "/areas/bishop-auckland", category: "city" },
  { key: "a1m", label: "A1(M)", href: "/areas/a1m", category: "road" },
  { key: "a66", label: "A66", href: "/areas/a66", category: "road" },
  { key: "a19", label: "A19", href: "/areas/a19", category: "road" },
  { key: "a67", label: "A67", href: "/areas/a67", category: "road" },
  { key: "a68", label: "A68", href: "/areas/a68", category: "road" },
  { key: "a167", label: "A167", href: "/areas/a167", category: "road" },
];

export function getAreaNavigation(key: string) {
  const area = areaNavigation.find((item) => item.key === key);

  if (!area) {
    throw new Error(`Unknown area navigation key: ${key}`);
  }

  return area;
}

export const cityAreas = areaNavigation.filter((a) => a.category === "city");
export const roadAreas = areaNavigation.filter((a) => a.category === "road");
