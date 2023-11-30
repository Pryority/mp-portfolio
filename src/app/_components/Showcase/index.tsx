import type { Project } from "typings";
import { getProjects } from "~/sanity/sanity.query";

import ProjectItem from "./ProjectItem";

const orderedProjectIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default async function Showcase() {
  const projects: Project[] = await getProjects();
  const orderedProjects = orderedProjectIds.map(
    (projectId) => projects.find((project) => project.id === projectId) ?? null,
  );
  return (
    <div className="relative z-30 flex h-[600px] w-full flex-col items-center justify-center overflow-visible bg-secondary text-left scrollbar-thin scrollbar-thumb-red-500 md:flex-row 2xl:min-h-[50vh]">
      <div className="absolute left-0 top-0 h-[900px] w-full -skew-y-6 bg-lime-800/10 dark:bg-[#0a0c0f] sm:h-[680px] 2xl:top-0 2xl:h-[720px]" />
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/70 to-background/20" /> */}
      <div className="absolute top-40 grid  grid-cols-1 items-center justify-around gap-8 overflow-clip sm:grid-cols-2 md:gap-16 xl:grid-cols-6 2xl:top-1/2 2xl:ml-40 2xl:mr-2 2xl:grid-cols-8">
        <div className="col-span-1 flex h-fit w-full flex-col items-center gap-8 pl-8 sm:items-start 2xl:col-span-2 2xl:pt-40">
          <h4 className="text-center text-2xl font-medium tracking-tight text-amber-600 dark:text-amber-400  sm:text-left md:text-left  2xl:text-4xl">
            Portfolio Showcase
          </h4>
          <p className="hidden text-left tracking-wide text-primary-foreground sm:block md:text-left xl:w-5/6 2xl:max-w-3xl 2xl:text-2xl 2xl:leading-[40px]">
            Explore a curated selection of my recent projects that highlight my
            skills and expertise in web development. From sleek corporate
            websites to interactive web applications, each project reflects my
            dedication to quality and user experience.
          </p>
        </div>
        <div className="no-scrollbar flex w-full items-center gap-4 overflow-x-scroll xl:col-span-5 2xl:col-span-6">
          <div className="absolute right-0  z-50 h-full w-[40px] bg-gradient-to-l from-[#0a0c0f] via-[#0a0c0f]/50 to-transparent 2xl:top-0" />
          {projects &&
            orderedProjects.map((project: Project | null) => (
              <ProjectItem key={project?.id} project={project} />
            ))}
        </div>
        <p className="block  w-full px-8 text-left tracking-wide text-primary-foreground sm:hidden 2xl:max-w-3xl 2xl:text-2xl 2xl:leading-[40px]">
          Explore a curated selection of my recent projects that highlight my
          skills and expertise in web development. From sleek corporate websites
          to interactive web applications, each project reflects my dedication
          to quality and user experience.
        </p>
      </div>
    </div>
  );
}
