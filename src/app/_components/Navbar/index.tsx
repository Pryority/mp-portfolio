import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <div className="z-50 flex h-fit w-full max-w-full flex-col items-center justify-center overflow-visible  text-left md:flex-row">
      <header className="z-50 flex w-full items-center md:justify-between md:px-16 md:py-8">
        <div className="flex w-full flex-col items-start text-center">
          <p className="whitespace-nowrap text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Matthew
            <span className="bg-gradient-to-tr from-lime-600  to-slate-400 bg-clip-text text-transparent">
              {" "}
              Pryor
            </span>
          </p>
          <p className="whitespace-nowrap text-xs uppercase tracking-[9.5px] text-slate-500">
            Web Developer
          </p>
        </div>
        <div className="hidden w-full justify-end gap-4">
          <Button variant={"outline"}>Login</Button>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
