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
        <div className="flex-1 flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <p>
              Oi, sou Felipe Cardoso, engenheiro de software morando em{" "}
              <a
                href="https://maps.app.goo.gl/8y1RnD8RQgXjTTTd8"
                target="_blank"
                className="underline decoration-violet-500 hover:text-violet-500"
              >
                Santos, SP
              </a>
              .
            </p>
            <p>
              Meu trabalho é transformar ideias em produtos reais, seja
              desenhando a interface, desenvolvendo o código ou planejando a
              arquitetura de sites, jogos e aplicações. Gosto de{" "}
              <a
                href="https://www.codewars.com/users/imLymei"
                target="_blank"
                className="underline decoration-violet-500 hover:text-violet-500"
              >
                resolver problemas difíceis
              </a>{" "}
              e de desafios que exigem pensar fora da caixa.
            </p>
            <p>
              Além de programar, também já passei um bom tempo em sala de aula
              como professor e liderei equipes de desenvolvimento. Essas
              experiências me ensinaram que, no fim das contas, colaborar bem e
              ajudar outras pessoas a evoluir é tão importante quanto escrever
              um código limpo.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-center md:text-left md:text-2xl">
              Experiências
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <p className="font-bold">
                  Trabalho 1{" "}
                  <span className="text-neutral-500">
                    (Janeiro 2024 - Dezembro 2025)
                  </span>
                </p>
                <p className="md:pl-4">Sobre o Trabalho 1</p>
              </li>
              <li>
                <p className="font-bold">Trabalho 2</p>
                <p className="md:pl-4">Sobre o Trabalho 2</p>
              </li>
              <li>
                <p className="font-bold">Trabalho 3</p>
                <p className="md:pl-4">Sobre o Trabalho 3</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-center md:text-left md:text-2xl">
              Tech Stack
            </h3>
            <ul className="flex flex-col gap-2">
              {TECH_STACK.map((tech) => (
                <li key={`tech-stack-${tech}`}>
                  <Patch
                    className="text-center"
                    style={{ background: getUniqueHashColor(tech) }}
                  >
                    {tech}
                  </Patch>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
