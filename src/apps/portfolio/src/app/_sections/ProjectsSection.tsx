"use client";

import Page from "@/components/Page";
import Button from "@/components/ui/Button";
import { ICON_SIZES, ICONS, PROJECTS, PROJECTS_TAGS } from "@/lib/constants";
import { cx, getUniqueHashColor } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function ProjectsSection() {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter((project) =>
        project.tags.some(
          (tag) => selectedTags.size === 0 || selectedTags.has(tag),
        ),
      ),
    [selectedTags],
  );

  return (
    <Page id="projects" className="flex min-h-dvh flex-col gap-12 p-6">
      <h2 className="text-center text-4xl font-bold md:text-left md:text-6xl">
        Projetos
      </h2>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p>Tags </p>
            {selectedTags.size > 0 && (
              <>
                <span>({selectedTags.size})</span>
                <Button
                  className="transition-transform hover:-rotate-180"
                  onClick={() => setSelectedTags(new Set())}
                >
                  <ICONS.RESET />
                </Button>
              </>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {PROJECTS_TAGS.map((tag) => {
              const tagColor = getUniqueHashColor(tag);

              const unselectedTagColor = tagColor + "60";
              const backgroundTagColor = tagColor + "10";

              const isSelected = selectedTags.has(tag);

              return (
                <Button
                  key={`tag-${tag}`}
                  className="rounded-full border px-4"
                  style={{
                    backgroundColor: backgroundTagColor,
                    borderColor: isSelected ? tagColor : unselectedTagColor,
                    color: isSelected ? tagColor : unselectedTagColor,
                  }}
                  onClick={() =>
                    setSelectedTags((selectedTags) => {
                      const newSelectedTags = new Set(selectedTags);

                      if (isSelected) newSelectedTags.delete(tag);
                      else newSelectedTags.add(tag);

                      return newSelectedTags;
                    })
                  }
                >
                  {tag}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={`project-${project.name}`}
              className={cx(
                "from relative flex flex-col gap-6 rounded-2xl border bg-linear-to-t from-neutral-500/20 p-6",
                {
                  "from-violet-500/20": project.isOpenSource,
                  "border-violet-500": project.isFavorite,
                },
              )}
            >
              <p className="flex items-center justify-center gap-2 text-center text-2xl font-bold">
                {project.name}
                {project.isFavorite && (
                  <ICONS.STAR
                    size={ICON_SIZES.SMALL}
                    className="text-violet-500"
                    title="Favorito"
                  />
                )}
              </p>
              {project.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={`Imagem do Projeto ${project.name}`}
                    fill
                    className="pointer-events-none object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">{project.description}</div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags
                    .sort((a, b) => a.localeCompare(b))
                    .map((projectTag) => {
                      const tagColor = getUniqueHashColor(projectTag);
                      const backgroundTagColor = tagColor + "10";

                      return (
                        <p
                          key={`project-${project.name}-tag-${projectTag}`}
                          className="rounded-full border px-4 text-center text-nowrap"
                          style={{
                            backgroundColor: backgroundTagColor,
                            borderColor: tagColor,
                            color: tagColor,
                          }}
                        >
                          {projectTag}
                        </p>
                      );
                    })}
                </div>
              </div>

              <a
                href={project.href}
                target="_blank"
                className={cx(
                  "flex items-center justify-center gap-2 rounded-full border border-neutral-500 bg-neutral-500/10 p-2 text-neutral-500 select-none",
                  {
                    "border-violet-500 bg-violet-500/10 text-violet-500":
                      project.isOpenSource,
                    "border-violet-800 bg-violet-500/5 text-violet-800":
                      project.isOpenSource && !project.href,
                    "cursor-not-allowed":
                      !project.isOpenSource || !project.href,
                  },
                )}
                title={project.isOpenSource ? "Open Source" : "Closed Source"}
              >
                {project.isOpenSource ? (
                  <>
                    <p>Open Source</p>
                    <ICONS.OPEN_SOURCE size={ICON_SIZES.SMALL} />
                  </>
                ) : (
                  <>
                    <p>Closed Source</p>
                    <ICONS.CLOSE_SOURCE size={ICON_SIZES.SMALL} />
                  </>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}
