"use client";

import Button from "@/components/ui/Button";
import useStatusHook from "@/hooks/useStatusHook";
import { APP } from "@/lib/config";
import { ICON_SIZES, ICONS } from "@/lib/constants";
import { cx } from "@/lib/utils";
import Image from "next/image";

export default function HeroSection() {
  const [hasCopiedEmail, setHasCopiedEmail] = useStatusHook(false);

  return (
    <div className="relative flex h-dvh items-center justify-center text-center">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-neutral-950">
        <Image
          src="/images/HappyBeach.jpg"
          alt="Eu na Praia"
          className="-z-10 object-cover object-bottom"
          fill
          preload
          quality={100}
        />
      </div>
      <div className="z-10 flex flex-col items-center gap-6">
        <div className="pointer-events-none opacity-0">space</div>

        <h1 className="mb-6 text-5xl font-bold md:text-9xl">
          Engenheiro de Software
        </h1>

        <Button
          onClick={() => {
            navigator.clipboard
              .writeText(APP.email)
              .then(() => setHasCopiedEmail(true));
          }}
          className="relative flex max-w-[90dvw] items-center gap-2 overflow-hidden rounded-full border border-neutral-950 bg-neutral-950/50 px-4 py-1 text-violet-500 transition-transform hover:bg-neutral-950"
        >
          <div
            className={cx(
              "absolute inset-0 flex max-w-[90dvw] translate-y-full items-center justify-center gap-2 bg-violet-500 px-4 text-neutral-950 transition-transform duration-200",
              { "translate-y-0": hasCopiedEmail },
            )}
          >
            <ICONS.CHECK size={ICON_SIZES.MEDIUM} />
            <p>Email copiado! Espero sua mensagem :)</p>
          </div>
          <ICONS.COPY size={ICON_SIZES.MEDIUM} />
          <p>{APP.email_anti_bot}</p>
        </Button>
      </div>
      <a
        href="#projects"
        className="absolute bottom-6 flex items-center gap-2 hover:text-violet-500"
      >
        Saiba mais <ICONS.EYE size={ICON_SIZES.SMALL} />
      </a>
    </div>
  );
}
