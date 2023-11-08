import Image from "next/image";
import type { Project } from "typings";
import client from "~/sanity/sanity.client";
import { getProjects } from "~/sanity/sanity.query";

import imageUrlBuilder from "@sanity/image-url";

function urlFor(source: string) {
  return imageUrlBuilder(client).image(source);
}
const orderedProjectIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default async function Showcase() {
  const projects: Project[] = await getProjects();
  const orderedProjects = orderedProjectIds.map(
    (projectId) => projects.find((project) => project.id === projectId) ?? null,
  );
  return (
    <div className="relative z-0 flex min-h-[40vh] w-full flex-col items-center justify-center bg-amber-50 bg-inherit text-left md:flex-row">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/70 to-background/20" />
      <div className="absolute top-1/2 grid w-full max-w-6xl -translate-y-1/2 grid-cols-2 items-center justify-around gap-8 md:gap-16">
        <div className="flex h-fit w-full flex-col gap-8">
          <h4 className="text-center text-4xl font-medium tracking-tight  text-lime-300 dark:text-amber-400  md:text-left">
            Portfolio Showcase
          </h4>
          <p className="text-center text-xl tracking-wide text-primary-foreground md:text-left">
            Dive into my world of creativity and innovation. Explore a curated
            selection of my recent projects that highlight my skills and
            expertise in web development. From sleek corporate websites to
            interactive web applications, each project reflects my dedication to
            quality and user experience.
          </p>
        </div>
        <div className="flex w-screen items-center gap-4 overflow-x-scroll">
          {projects &&
            orderedProjects.map((project: Project | null) => (
              <ProjectItem key={project?.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectItemProps {
  project: Project | null;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="relative flex h-96 w-96 justify-center p-4">
      <div
        id="project"
        className="relative h-full w-screen rounded-md bg-slate-400"
      >
        {project ? (
          <Image
            src={urlFor(project.demoImage.asset._ref).url()}
            alt=""
            className="object-cover"
            fill
            sizes="100vw"
          />
        ) : (
          <div>Could not load project</div>
        )}
      </div>
      <p className="absolute bottom-2 bg-primary px-4 py-2 text-primary-foreground">
        {project?.title}
      </p>
    </article>
  );
}
