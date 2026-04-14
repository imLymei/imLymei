import Link from "next/link";
import {
  FaArrowRotateLeft,
  FaCheck,
  FaCopy,
  FaEye,
  FaLink,
  FaLock,
  FaLockOpen,
  FaStar,
} from "react-icons/fa6";

const default_icon_size = 15;
export const ICON_SIZES = {
  EXTRA_SMALL: default_icon_size * 0.5,
  SMALL: default_icon_size,
  MEDIUM: default_icon_size * 1.25,
  LARGE: default_icon_size * 1.5,
  EXTRA_LARGE: default_icon_size * 2,
  EXTRA_EXTRA_LARGE: default_icon_size * 4,
  ULTRA_LARGE: default_icon_size * 8,
};

export const ICONS = {
  LINK: FaLink,
  COPY: FaCopy,
  CHECK: FaCheck,
  EYE: FaEye,
  RESET: FaArrowRotateLeft,
  OPEN_SOURCE: FaLockOpen,
  CLOSE_SOURCE: FaLock,
  STAR: FaStar,
};

export type Project = {
  name: string;
  description: React.ReactNode;
  isOpenSource: boolean;
  image?: string;
  href?: string;
  isFavorite?: boolean;
  tags: string[];
  externalLinksButtons?: { description: string; href: string }[];
};
export const PROJECTS: Project[] = [
  {
    name: "Intranet Escolar",
    description: (
      <>
        <p>
          Plataforma de intranet educacional que permite a professores, alunos e
          familiares acessar ocorrências, provas e resultados, além de gerar
          relatórios e acompanhar dados acadêmicos. Atualmente utilizada por
          mais de 1000 usuários simultâneos em múltiplas unidades.
        </p>
        <p>
          Desenvolvida com TypeScript, React.js e Next.js, integra APIs internas
          e serviços externos, oferecendo ferramentas para gestão de informações
          acadêmicas e geração de relatórios.
        </p>
        <p>
          Atuei como Tech Lead da equipe responsável pelo desenvolvimento,
          liderando decisões técnicas, estruturação de CI/CD, implementação de
          testes automatizados, containerização com Docker e a criação de um SDK
          interno para padronização de serviços.
        </p>
      </>
    ),
    isOpenSource: false,
    tags: [
      "Next.js",
      "React.js",
      "Typescript",
      "REST API",
      "SDK",
      "Docker",
      "SQL Server",
      "Node",
      "Autenticação",
      "Tailwind CSS",
      "CI/CD",
    ],
    image: "/images/IntranetJeanPiaget.png",
    isFavorite: true,
  },
  {
    name: "Foji",
    description: (
      <>
        <p>
          CLI open-source desenvolvida para automatizar e simplificar comandos
          longos ou repetitivos no fluxo de trabalho de desenvolvedores, ou
          seja, meus comandos no Docker xD.
        </p>
        <p>
          Construída com TypeScript e Node.js, permite a criação e execução de
          comandos personalizados com suporte a argumentos obrigatórios,
          opcionais, condicionais e{" "}
          <span className="italic">spread arguments</span>. A ferramenta também
          inclui gerenciamento de configurações via CLI e sincronização em nuvem
          utilizando GitHub Gists, permitindo compartilhar e sincronizar
          comandos entre diferentes ambientes.
        </p>
      </>
    ),
    isOpenSource: true,
    tags: [
      "CLI",
      "Typescript",
      "Automação",
      "Localfirst",
      "Cloud Sync",
      "Node",
    ],
    isFavorite: true,
    image: "/images/Foji.png",
    href: "https://github.com/imLymei/foji",
  },
  {
    name: "Portfolio com Blog",
    description: (
      <>
        <p>
          Portfólio e blog pessoal desenvolvido para apresentar meus projetos,
          documentar estudos de caso e compartilhar aprendizados da minha
          jornada como desenvolvedor de software.
        </p>
        <p>
          Infelizmente nunca consegui fazer posts completos dentro do site, mas
          quem sabe esse{" "}
          <Link
            href="/blog"
            className="underline decoration-violet-500 hover:text-violet-500"
          >
            aqui não seja diferente
          </Link>{" "}
          ;) ...
        </p>
        <p>
          Desenvolvido com Next.js, React e MDX para permitir a criação de
          conteúdo técnico diretamente em Markdown, integrando código e
          documentação em uma mesma estrutura. O projeto utiliza Tailwind CSS
          para estilização e foi pensado para facilitar a escrita de artigos
          técnicos.
        </p>
      </>
    ),
    isOpenSource: true,
    tags: ["Next.js", "React.js", "MDX", "Typescript", "Tailwind CSS"],
    href: "https://github.com/imLymei/portfolio-blog",
    image: "/images/PortfolioBlog.png",
  },
  {
    name: "TypeSpeed",
    description: (
      <>
        <p>
          Aplicação web e desktop desenvolvida para treinar velocidade e
          precisão de digitação utilizando a{" "}
          <span className="italic">Home Row</span>. Foi assim que consegui me
          acostumar com o Vim B).
        </p>
        <p>
          O usuário digita sequências de palavras enquanto o sistema acompanha
          métricas em tempo real, como precisão e número de acertos, permitindo
          visualizar a evolução da performance durante a prática.
        </p>
        <p>
          O projeto foi desenvolvido com Next.js, React e Tailwind CSS para a
          interface, utilizando Tauri para a criação de um aplicativo desktop
          leve e multiplataforma.
        </p>
      </>
    ),
    isOpenSource: true,
    tags: ["Next.js", "React.js", "Tailwind CSS", "Tauri", "Typescript"],
    href: "https://github.com/imLymei/type-speed",
    image: "/images/FastType.png",
  },
  {
    name: "Desafios RDO",
    description: (
      <>
        <p>
          Conjunto de desafios de desenvolvimento web implementados para
          praticar lógica de programação e conceitos fundamentais de front-end.
          O projeto inclui um conversor de números romanos e arábicos, uma
          implementação interativa do Conway&apos;s Game of Life e um sistema de
          restaurante capaz de gerar faturas e dividir automaticamente os custos
          entre pessoas da mesma mesa.
        </p>
        <p>
          Desenvolvido com Next.js, React.js, Node.js e Tailwind CSS, com foco
          em lógica algorítmica, interatividade e organização de aplicações web
          modernas.
        </p>
      </>
    ),
    isOpenSource: true,
    tags: ["Next.js", "React.js", "Tailwind CSS", "Typescript", "Desafios"],
    image: "/images/RDO.png",
    href: "https://github.com/imLymei/desafios-rdo",
  },
  {
    name: "Contador de Cartas Kariba",
    description: (
      <>
        <p>
          Um dos meus primeiros projetos. Este site tem como objetivo ajudar os
          jogadores a estimar as probabilidades das cartas do oponente no jogo
          Kariba. A aplicação funciona como um contador de cartas, permitindo
          registrar quais cartas já foram jogadas e calcular dinamicamente as
          chances de cada animal aparecer novamente no baralho.
        </p>
        <p>Você ainda perderia para minha irmã mesmo se usar isso...</p>
        <p>O projeto foi desenvolvido com Next.js, React e Tailwind CSS.</p>
      </>
    ),
    isOpenSource: true,
    tags: ["React.js", "Next.js", "Typescript", "Tailwind CSS"],
    href: "https://github.com/imLymei/kariba-card-counter",
    image: "/images/KaribaCardCounter.png",
  },
];
export const PROJECTS_TAGS = Array.from(
  new Set(
    PROJECTS.flatMap((project) => project.tags).sort((a, b) =>
      a.localeCompare(b),
    ),
  ),
);

export const TECH_STACK: string[] = [
  "React.js",
  "Typescript",
  "Docker",
  "Node",
  "C#",
];

export const EXPERIENCES: {
  role: string;
  employer: string;
  description: string;
  period?: string;
}[] = [
  {
    employer: "Jean Piaget",
    role: "Coordenador de Tecnologia Educacional e Desenvolvimento",
    description:
      "Responsável pelo planejamento, coordenação e implementação de soluções tecnológicas no ambiente escolar. Atuando na liderança de projetos de desenvolvimento de sistemas internos utilizando tecnologias como React, Node.js, TypeScript, Rust e Go, além de apoiar professores e alunos na criação de projetos e ferramentas digitais. Além de lecionar Projetos de Iniciação Científica, conduzindo aulas, cursos e oficinas, e desenvolver recursos educacionais utilizando tecnologias como impressão 3D e corte a laser.",
    period: "Agosto de 2025 - Presente",
  },
  {
    employer: "Jean Piaget",
    role: "Engenheiro de Software",
    description:
      "Responsável pelo planejamento, desenvolvimento e implementação de soluções tecnológicas personalizadas voltadas à otimização e transformação do ambiente escolar. Atuei na construção e manutenção de sistemas utilizados por toda comunidade escolar, utilizando tecnologias como TypeScript, React.js e Rust. Trabalhando com práticas modernas de engenharia de software, incluindo CI/CD e testes automatizados.",
    period: "Janeiro de 2024 - Agosto de 2025",
  },
  {
    employer: "Safe Swap",
    role: "Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack focado na criação, refatoração e planejamento de novos projetos e funcionalidades, auxiliando a equipe a fornecer aos nossos clientes um local seguro para realizar sonhos de qualquer tamanho.",
    period: "Janeiro 2024 - Julho 2025",
  },
];

export const ACADEMICS: {
  university: string;
  degree: string;
  areaOfStudy: string;
  period: string;
}[] = [
  {
    university: "UNISANTA",
    areaOfStudy: "Análise e Desenvolvimento de Sistemas",
    degree: "Tecnólogo",
    period: "Fevereiro 2022 - Junho 2024",
  },
  {
    university: "PUC Rio",
    areaOfStudy: "Engenharia de Software",
    degree: "Pós-Graduação",
    period: "Março 2026 - Presente",
  },
];
