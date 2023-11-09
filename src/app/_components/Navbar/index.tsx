import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <header className="z-50 flex h-fit w-full flex-col items-center justify-center overflow-visible p-2 text-left md:flex-row">
      <div className="z-50 flex w-full items-center md:justify-between">
        <div className="flex w-full flex-col items-end text-center">
          <p className="whitespace-nowrap text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Matthew
            <span className="bg-gradient-to-tr from-amber-600 via-amber-700  to-amber-800 bg-clip-text text-transparent">
              {" "}
              Pryor
            </span>
          </p>
          <p className="whitespace-nowrap text-xs uppercase tracking-[8.8px] text-slate-500">
            Web Developer
          </p>
        </div>
        <div className="hidden w-full justify-end gap-4">
          <Button variant={"outline"}>Login</Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
