import { ICON_SIZES } from "@/lib/constants";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 p-12 text-center text-sm text-neutral-500">
      <p>Felipe &quot;Lymei&quot; Cardoso [2026]</p>
      <div className="flex justify-center gap-2">
        <a
          href="https://github.com/imLymei"
          target="_blank"
          className="hover:text-violet-500"
        >
          <BsGithub size={ICON_SIZES.SMALL} />
        </a>
        <a
          href="https://www.linkedin.com/in/imlymei/"
          target="_blank"
          className="hover:text-violet-500"
        >
          <BsLinkedin size={ICON_SIZES.SMALL} />
        </a>
      </div>
      {/*<a
        href="https://advanzzze.com"
        target="_blank"
        className="underline decoration-violet-500 hover:text-violet-500"
      >
        Advanzzze.com
      </a>*/}
    </div>
  );
}
