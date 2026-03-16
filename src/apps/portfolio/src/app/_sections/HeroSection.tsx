"use client";

import Button from "@/components/ui/Button";
import Patch from "@/components/ui/Patch";
import useStatusHook from "@/hooks/useStatusHook";
import { APP } from "@/lib/config";
import { ICON_SIZES, ICONS } from "@/lib/constants";
import { cx } from "@/lib/utils";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

export default function HeroSection() {
  const [hasCopiedEmail, setHasCopiedEmail] = useStatusHook(false);

  return (
    <div className="relative flex h-dvh items-center justify-center text-center">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-neutral-950">
        <Image
          src="/images/HappyBeach.jpg"
          // src="/images/BeachSky.jpg"
          alt="Eu na Praia :)"
          className="-z-10 object-cover object-bottom"
          fill
          preload
          quality={100}
        />
        <div className="absolute right-0 bottom-0 left-0 h-6 translate-y-full bg-linear-to-b from-neutral-950" />
      </div>
      <div className="z-10 flex flex-col items-center gap-6">
        <div className="pointer-events-none opacity-0">space</div>

        <h1 className="mb-6 w-fit text-5xl font-bold md:text-7xl lg:text-9xl">
          Engenheiro de{" "}
          <span className="relative">
            Software
            <div className="absolute top-1/2 left-1/2 -z-10 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:size-64">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                fill="currentColor"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                viewBox="0 0 300 300"
                className="text-violet-500"
              >
                <path d="M150 0v28.815a11.936 11.936 0 0 0 23.642 2.328l5.622-28.262-5.622 28.262a11.936 11.936 0 0 0 22.734 6.896l11.027-26.622-11.027 26.622a11.936 11.936 0 0 0 20.952 11.199l16.009-23.959-16.009 23.959a11.936 11.936 0 0 0 18.364 15.07l20.375-20.375-20.375 20.375a11.936 11.936 0 0 0 15.07 18.364l23.959-16.009-23.959 16.009a11.936 11.936 0 0 0 11.199 20.952l26.622-11.027-26.622 11.027a11.937 11.937 0 0 0 6.896 22.734l28.262-5.622-28.262 5.622A11.937 11.937 0 0 0 271.185 150H300h-28.815a11.936 11.936 0 0 0-2.328 23.642l28.262 5.622-28.262-5.622a11.936 11.936 0 0 0-6.896 22.734l26.622 11.027-26.622-11.027a11.936 11.936 0 0 0-11.199 20.952l23.959 16.009-23.959-16.009a11.936 11.936 0 0 0-15.07 18.364l20.375 20.375-20.375-20.375a11.936 11.936 0 0 0-18.364 15.07l16.009 23.959-16.009-23.959a11.936 11.936 0 0 0-20.952 11.199l11.027 26.622-11.027-26.622a11.937 11.937 0 0 0-22.734 6.896l5.622 28.262-5.622-28.262A11.937 11.937 0 0 0 150 271.185V300v-28.815a11.936 11.936 0 0 0-23.642-2.328l-5.622 28.262 5.622-28.262a11.936 11.936 0 0 0-22.734-6.896l-11.027 26.622 11.027-26.622a11.936 11.936 0 0 0-20.952-11.199l-16.009 23.959 16.009-23.959a11.936 11.936 0 0 0-18.364-15.07l-20.375 20.375 20.375-20.375a11.936 11.936 0 0 0-15.07-18.364l-23.959 16.009 23.959-16.009a11.936 11.936 0 0 0-11.199-20.952l-26.622 11.027 26.622-11.027a11.937 11.937 0 0 0-6.896-22.734l-28.262 5.622 28.262-5.622A11.937 11.937 0 0 0 28.815 150H0h28.815a11.936 11.936 0 0 0 2.328-23.642l-28.262-5.622 28.262 5.622a11.936 11.936 0 0 0 6.896-22.734L11.417 92.597l26.622 11.027a11.936 11.936 0 0 0 11.199-20.952L25.279 66.663l23.959 16.009a11.936 11.936 0 0 0 15.07-18.364L43.933 43.933l20.375 20.375a11.936 11.936 0 0 0 18.364-15.07L66.663 25.279l16.009 23.959a11.936 11.936 0 0 0 20.952-11.199L92.597 11.417l11.027 26.622a11.937 11.937 0 0 0 22.734-6.896l-5.622-28.262 5.622 28.262A11.937 11.937 0 0 0 150 28.815V0Z" />
              </svg>
            </div>
            <div className="absolute -rotate-10 right-6 -bottom-6 flex flex-col gap-1 text-xs max-lg:translate-y-1/2 max-md:translate-x-1/2 lg:text-sm">
              <Patch className="bg-blue-500">
                <p className="flex gap-2 items-center">
                  <FaPlus size={ICON_SIZES.SMALL} />
                  UI Designer
                </p>
              </Patch>
              <Patch className="bg-violet-500">
                <p className="flex gap-2 items-center">
                  <FaPlus size={ICON_SIZES.SMALL} />
                  UX Designer
                </p>
              </Patch>
            </div>
          </span>
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
        href="#about-me"
        className="absolute bottom-6 flex items-center gap-2 hover:text-violet-500"
      >
        Saiba mais{" "}
        <ICONS.EYE
          size={ICON_SIZES.SMALL}
          className="animate-wink origin-center text-violet-500"
        />
      </a>
    </div>
  );
}
