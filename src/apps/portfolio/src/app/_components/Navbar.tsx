import Logo from "@/components/ui/Logo";
import { ICON_SIZES } from "@/lib/constants";

export default function Navbar() {
  return (
    <div className="pointer-events-none absolute inset-0 top-96 z-20 flex flex-col items-center lg:top-80 2xl:top-80">
      <div className="sticky top-4 w-fit rounded-full border border-neutral-50 bg-neutral-950 px-4 py-1">
        <a
          href="#home"
          className="pointer-events-auto flex items-center justify-center gap-2"
        >
          Felipe{" "}
          <Logo
            color="off-white"
            size={ICON_SIZES.MEDIUM}
            className="stroke-neutral-50 select-none"
          />
          Cardoso
        </a>
      </div>
    </div>
  );
}
