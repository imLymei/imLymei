import Image from "next/image";
import logoBlack from "../../../public/Logos/LogoBlack.svg";
import logoBlueBlack from "../../../public/Logos/LogoBlueBlack.svg";
import logoGreen from "../../../public/Logos/LogoGreen.svg";
import logoOffWhite from "../../../public/Logos/LogoOffWhite.svg";
import { ICON_SIZES } from "@/lib/constants";

export default function Logo({
  color,
  size,
  className,
}: {
  color?: "black" | "blue-black" | "green" | "off-white";
  size?: number;
  className?: string;
}) {
  let svgSrc = logoBlack;

  switch (color) {
    case "blue-black":
      svgSrc = logoBlueBlack;
      break;
    case "green":
      svgSrc = logoGreen;
      break;
    case "off-white":
      svgSrc = logoOffWhite;
  }

  return (
    <Image
      src={svgSrc}
      unoptimized
      alt="Minha Logo"
      className={className}
      width={size ?? ICON_SIZES.MEDIUM}
      height={size ?? ICON_SIZES.MEDIUM}
    />
  );
}
