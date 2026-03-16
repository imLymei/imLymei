import Page from "@/components/Page";
import Patch from "@/components/ui/Patch";
import { TECH_STACK } from "@/lib/constants";
import { getUniqueHashColor } from "@/lib/utils";

export default function AboutMeSection() {
  return (
    <Page id="about-me" className="relative flex flex-col gap-12 p-6">
      <h2 className="text-center text-4xl font-bold md:text-left md:text-6xl">
        Sobre Mim
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <p>
            Sou Felipe Cardoso, Engenheiro de Software baseado em{" "}
            <a
              href="https://maps.app.goo.gl/8y1RnD8RQgXjTTTd8"
              target="_blank"
              className="underline decoration-violet-500 hover:text-violet-500"
            >
              Santos, SP, Brasil
            </a>
            . Tendo experiências na criação de Designs, Programação e
            Arquitetura de Websites, Jogos e Aplicativos. Sou um programador que
            adora desafios e resolver problemas, além disso, já atuei como
            Professor de Programação e Coordenador de Equipes Desenvolvimento,
            que me deram habilidades de trabalho em equipe e de mentoria.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-center md:text-left md:text-2xl">
              Tech Stack
            </h3>
            <div className="flex flex-col gap-2">
              {TECH_STACK.map((tech) => (
                <Patch
                  key={`tech-stack-${tech}`}
                  className="text-center"
                  style={{ background: getUniqueHashColor(tech) }}
                >
                  {tech}
                </Patch>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
