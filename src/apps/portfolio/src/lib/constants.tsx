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
    name: "Intranet Jean Piaget",
    description: (
      <>
        <p>
          Plataforma de intranet educacional do Colégio Jean Piaget, utilizada
          por +1000 usuários em múltiplas unidades. Desenvolvida com TypeScript,
          React.js e Next.js, integra APIs internas e serviços externos e
          permite a geração de relatórios e gestão de dados acadêmicos.
        </p>
        <p>
          Atuei como Tech Lead da equipe responsável pelo desenvolvimento,
          liderando decisões técnicas, estrutura de CI/CD, testes automatizados,
          containerização com Docker e a criação de um SDK interno para
          padronização de serviços, com foco em performance e escalabilidade.
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
          Ferramenta de linha de comando (CLI) open-source desenvolvida para
          automatizar e simplificar comandos longos ou repetitivos no fluxo de
          trabalho de desenvolvedores.
        </p>
        <p>
          Construída com TypeScript e Node.js, permite a criação e execução de
          comandos personalizados com suporte a argumentos obrigatórios,
          opcionais, condicionais e spread arguments para alta flexibilidade. A
          ferramenta também inclui gerenciamento de configurações via CLI e
          sincronização em nuvem utilizando GitHub Gists, permitindo
          compartilhar e sincronizar comandos entre diferentes ambientes.
        </p>
      </>
    ),
    isOpenSource: true,
    tags: [
      "CLI",
      "Typescript",
      "Tailwind CSS",
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
    name: "Desafios RDO",
    description: (
      <>
        <p>
          Conjunto de desafios de desenvolvimento web implementados para
          praticar lógica de programação e conceitos fundamentais de front-end.
          O projeto inclui um conversor de números romanos e arábicos, uma
          implementação interativa do Conway's Game of Life e um sistema de
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
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Algoritmos",
      "Typescript",
      "Desafios",
    ],
    image: "/images/RDO.png",
    href: "https://github.com/imLymei/desafios-rdo",
  },
];
export const PROJECTS_TAGS = Array.from(
  new Set(
    PROJECTS.flatMap((project) => project.tags).sort((a, b) =>
      a.localeCompare(b),
    ),
  ),
);
