"use client";

import Button from "@/components/ui/Button";
import { APP } from "@/lib/config";

export default function Home() {
  return (
    <div>
      <div className="relative flex h-dvh flex-col items-center justify-center text-center font-bold">
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
        <div className="z-10 flex flex-col items-center">
          <p className="md:text-2xl">Felipe Cardoso</p>
          <h1 className="mb-6 font-mono text-6xl md:text-9xl">
            Engenheiro de Software
          </h1>

          <div className="overflow-hidden">
            <Button
              onClick={() => {
                navigator.clipboard
                  .writeText(APP.email)
                  .then(() => setHasCopiedEmail(true));
              }}
              className="flex items-center gap-2 rounded-full border border-neutral-950 bg-neutral-950/50 px-4 py-1 font-mono text-violet-500 hover:bg-neutral-950"
            >
              {hasCopiedEmail ? (
                <ICONS.CHECK size={ICON_SIZES.MEDIUM} />
              ) : (
                <ICONS.COPY size={ICON_SIZES.MEDIUM} />
              <p>{APP.email_anti_bot}</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
