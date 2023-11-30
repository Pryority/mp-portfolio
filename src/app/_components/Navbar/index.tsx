// import { Button } from "@/app/_components/ui/button";
import { ThemeToggle } from "@/app/_components/ui/theme-toggle";

export default function Navbar() {
  return (
    <header className="z-50 flex h-fit w-full flex-col items-center justify-center overflow-visible p-2 text-left md:flex-row lg:max-w-6xl">
      <div className="z-50 flex w-full items-center md:justify-between">
        <div className="flex flex-col text-center">
          <p className="whitespace-nowrap text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Matthew
            <span className="bg-gradient-to-tr from-lime-600 via-lime-700  to-lime-800 bg-clip-text text-transparent">
              {" "}
              Pryor
            </span>
          </p>
          <p className="whitespace-nowrap text-xs uppercase tracking-[8.8px] text-slate-500">
            Web Developer
          </p>
        </div>
        <div className="flex w-full justify-end gap-4">
          {/* <Button variant={"outline"}>Login</Button> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
