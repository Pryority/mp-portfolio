import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { MessageSquare, Pentagon, ShieldMinus, UserCircle } from "lucide-react";

export default function WhyChooseMe() {
  return (
    <div className="relative z-0 mt-64 flex h-full w-full flex-col items-start justify-center bg-gradient-to-t from-cyan-900/20 to-transparent pb-40 text-left sm:items-center md:flex-row 2xl:top-0 2xl:min-h-[30vh]">
      <div className="absolute -right-96 top-1/2 h-40 w-96 animate-pulse rounded-full bg-cyan-500 blur-[256px] dark:bg-lime-500" />
      <div className="z-10 grid h-full w-full items-center justify-center gap-8 pt-80 sm:max-w-2xl sm:gap-6 sm:pt-40 md:max-w-2xl md:gap-8 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        <h4 className="text-center text-4xl font-medium tracking-tight text-cyan-900 dark:text-lime-400">
          Why Choose Me
        </h4>
        <div className="flex w-screen flex-col items-center justify-center gap-4 sm:justify-around sm:px-4 min-[768px]:flex-row">
          <Card className="flex w-full max-w-xs flex-col items-center justify-center bg-secondary-foreground/10 backdrop-blur-md sm:max-w-sm md:h-[24rem] lg:h-[24rem]">
            <CardHeader className="flex flex-col items-center">
              <div className="group relative flex items-center justify-center rounded-full">
                <UserCircle
                  size={104}
                  className="absolute z-20 text-primary invert transition-all duration-75 ease-in-out group-hover:text-cyan-100 group-hover:invert-0 dark:invert-0"
                />
                <div className="h-[128px] w-[128px] rounded-full border-2 border-primary/20 bg-background/20 invert group-hover:bg-[#1e1e1e] group-hover:invert-0" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center lg:text-xl 2xl:text-2xl">
                <span className="font-bold text-amber-800 dark:text-amber-500">
                  Expertise
                </span>{" "}
                in transforming ideas into seamless, intuitive, and visually
                appealing web applications.
              </p>
            </CardContent>
          </Card>
          {/*  */}
          <Card className="flex w-full max-w-xs flex-col items-center justify-center bg-secondary-foreground/10 backdrop-blur-md sm:max-w-sm md:h-[24rem] lg:h-[24rem]">
            <CardHeader className="flex flex-col items-center">
              <div className="group relative flex items-center justify-center rounded-full">
                <ShieldMinus
                  size={104}
                  className="absolute z-20 translate-y-1 text-primary invert transition-all duration-75 ease-in-out group-hover:text-cyan-100 group-hover:invert-0 dark:invert-0"
                />
                <div className="h-[128px] w-[128px] rounded-full border-2 border-primary/20 bg-background/20 invert group-hover:bg-[#1e1e1e] group-hover:invert-0" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center lg:text-xl 2xl:text-2xl">
                Strong{" "}
                <span className="font-bold text-amber-800 dark:text-amber-500">
                  problem-solving
                </span>{" "}
                skills and adaptability to embrace new challenges and
                technologies.
              </p>
            </CardContent>
          </Card>
          {/*  */}
          <Card className="flex w-full max-w-xs flex-col items-center justify-center bg-secondary-foreground/10 backdrop-blur-md sm:max-w-sm md:h-[24rem] lg:h-[24rem]">
            <CardHeader className="flex flex-col items-center">
              <div className="group relative flex items-center justify-center rounded-full">
                <MessageSquare
                  size={80}
                  className="absolute z-20 text-primary invert transition-all duration-75 ease-in-out group-hover:text-cyan-100 group-hover:invert-0 dark:invert-0"
                />
                <div className="h-[128px] w-[128px] rounded-full border-2 border-primary/20 bg-background/20 invert group-hover:bg-[#1e1e1e] group-hover:invert-0" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-center lg:text-xl 2xl:text-2xl">
                <span className="font-bold text-amber-800 dark:text-amber-500">
                  Collaborative
                </span>{" "}
                spirit, thriving in team environments and uplifting team morale.
              </p>
            </CardContent>
          </Card>
        </div>
        {/* 
          {`Choose me for your software development needs, and let's create
            outstanding digital experiences together.`}
       */}
      </div>
    </div>
  );
}
