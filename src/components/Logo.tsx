import Image from "next/image";

const sizeMap = {
  sm: { className: "h-8" },
  md: { className: "h-10" },
  lg: { className: "h-13" },
};

const variantMap = {
  light: {
    src: "/images/fsr-recovery-group-logo.webp",
    width: 756,
    height: 221,
  },
  dark: {
    src: "/images/FSR Recovery Groups logo design.webp",
    width: 742,
    height: 191,
  },
};

export function Logo({
  variant = "light",
  size = "md",
  priority = true,
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}) {
  const s = sizeMap[size];
  const v = variantMap[variant];

  return (
    <Image
      src={v.src}
      alt="FSR Recovery Groups"
      width={v.width}
      height={v.height}
      priority={priority}
      className={`w-auto ${s.className}`}
    />
  );
}
