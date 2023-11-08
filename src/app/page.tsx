import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { Button } from "./_components/ui/button";
import { ThemeToggle } from "./_components/ui/theme-toggle";
import Image from "next/image";
import Hero from "./_components/Hero";
import Row2 from "./_components/Row2";
import Showcase from "./_components/Showcase";

export default function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex w-screen snap-y flex-col items-center justify-start overflow-x-hidden overflow-y-scroll bg-background">
      <Hero />
      <Row2 />
      <Showcase />
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs text-pt">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }

{
  /* <h1 className="font-light text-green sm:text-[5rem] md:text-5xl md:tracking-[-8px]">
              Hello, Bonjour{" "}
            </h1> */
}

{
  /* <div className="grid w-full grid-cols-2 items-center gap-2 md:flex">
              <Button className="w-full" variant={"about"}>
                About
              </Button>
              <Button className="w-full" variant={"projects"}>
                Projects
              </Button>
              <Button className="w-full" variant={"projects"}>
                Skills
              </Button>
              <Button className="w-full" variant={"projects"}>
                Experience
              </Button>
            </div> */
}
{
  /* <Image
                src={"/headshot-no-bg.png"}
                alt=""
                className="object-contain"
                fill
              /> */
}

{
  /* <header className="flex w-full justify-between px-40 py-8">
        <h1>Site Title</h1>
        <div className="flex gap-4">
          <Button variant={"outline"}>Login</Button>
          <ThemeToggle />
        </div>
      </header>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-green text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="">T3</span> App
        </h1>
        <div className="text-pt grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-green text-2xl">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>

        <CrudShowcase />
      </div> */
}
