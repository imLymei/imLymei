"use client";

import Button from "@/components/ui/Button";
import { APP } from "@/lib/config";

export default function Home() {
  return (
    <div>
      <div className="flex h-[80dvh] flex-col items-center justify-center text-center font-bold">
        <p className="text-neutral-500 md:text-2xl">Felipe Cardoso</p>
        <h1 className="mb-6 font-mono text-6xl md:text-9xl">
          Engenheiro de Software
        </h1>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(APP.email);
          }}
          className="font-mono text-violet-500"
        >
          {APP.email_anti_bot}
        </Button>
      </div>
    </div>
  );
}
