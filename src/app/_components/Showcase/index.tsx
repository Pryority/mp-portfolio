import type { Project } from "@/../typings";
import { getProjects } from "@/sanity/sanity.query";

import ProjectItem from "./ProjectItem";

const orderedProjectIds = [0, 1, 3, 4, 5, 6, 7, 8];

export default async function Showcase() {
  const projects: Project[] = await getProjects();
  const orderedProjects = orderedProjectIds.map(
    (projectId) => projects.find((project) => project.id === projectId) ?? null,
  );
  return (
    <div className="relative z-30 flex h-[600px]  w-full flex-col items-center justify-center overflow-visible bg-secondary text-left scrollbar-thin scrollbar-thumb-red-500 sm:pl-8 md:flex-row md:pl-12 2xl:min-h-[50vh]">
      <div className="absolute left-0 top-0 h-[900px] w-full -skew-y-6 bg-primary dark:bg-[#0a0c0f] sm:h-[680px] xl:-skew-y-3 2xl:-top-12 2xl:h-[720px] 2xl:-skew-y-3" />
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/70 to-background/20" /> */}
      <div className="absolute top-40 grid grid-cols-1 items-center justify-around gap-8 overflow-clip sm:grid-cols-2 md:gap-16 lg:grid-cols-6 xl:grid-cols-6 2xl:top-24 2xl:grid-cols-8">
        <div className="col-span-1 flex h-fit w-full flex-col items-center gap-8 sm:items-start lg:col-span-2 2xl:col-span-3">
          <h4 className="text-center text-2xl font-medium tracking-tight text-amber-600 dark:text-amber-400 sm:text-left  md:text-left md:text-4xl  2xl:text-4xl">
            Project Showcase
          </h4>
          <p className="hidden text-left tracking-wide text-primary-foreground sm:block md:text-left md:text-lg lg:text-xl xl:w-5/6 2xl:max-w-3xl 2xl:text-2xl 2xl:leading-[40px]">
            Explore a curated selection of my recent projects that highlight my
            skills and expertise in web development. From sleek corporate
            websites to interactive web applications, each project reflects my
            dedication to quality and user experience.
          </p>
        </div>
        <div className="no-scrollbar flex w-full items-center gap-4 overflow-x-scroll lg:col-span-4 2xl:col-span-5">
          <div className="absolute right-0 z-50 h-full w-[24px] bg-gradient-to-l from-primary to-transparent dark:from-[#0a0c0f] dark:via-[#0a0c0f]/90 2xl:top-0" />

          <div className="flex gap-2 p-2">
            {projects &&
              orderedProjects.map((project: Project | null) => (
                <ProjectItem key={project?.id} project={project} />
              ))}
          </div>
        </div>
        <p className="block w-full px-8 text-left tracking-wide text-primary-foreground sm:hidden">
          Explore a curated selection of my recent projects that highlight my
          skills and expertise in web development. From sleek corporate websites
          to interactive web applications, each project reflects my dedication
          to quality and user experience.
        </p>
      </div>
    </div>
  );
}
