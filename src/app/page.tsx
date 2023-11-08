import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { Button } from "./_components/ui/button";
import { ThemeToggle } from "./_components/ui/theme-toggle";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex h-screen snap-y snap-mandatory flex-col  items-center justify-start overflow-y-scroll bg-gradient-to-b from-[#fafafa] to-[#faf5d4] text-white dark:from-[#1e1e1e] dark:to-[#000e0e]">
      {/* <header className="flex w-full justify-between px-40 py-8">
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
      </div> */}
      <div className="relative z-0 flex h-screen w-full max-w-full flex-col items-center justify-center overflow-visible text-left md:flex-row">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-green sm:text-[5rem]">
            Create <span className="">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 text-pt sm:grid-cols-2 md:gap-8">
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
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-green">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <CrudShowcase />
        </div>
      </div>
      <div className="relative z-0 flex h-screen w-full max-w-full flex-col items-center justify-center overflow-visible text-left md:flex-row">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-green sm:text-[5rem]">
            Create <span className="">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 text-pt sm:grid-cols-2 md:gap-8">
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
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-green">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <CrudShowcase />
        </div>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs text-pt">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
<link type="image/png" rel="apple-touch-icon" sizes="57x57" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-57x57.png">
<link type="image/png" rel="apple-touch-icon" sizes="72x72" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-72x72.png">
<link type="image/png" rel="apple-touch-icon" sizes="76x76" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-76x76.png">
<link type="image/png" rel="apple-touch-icon" sizes="114x114" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-114x114.png">
<link type="image/png" rel="apple-touch-icon" sizes="120x120" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-120x120.png">
<link type="image/png" rel="apple-touch-icon" sizes="144x144" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-144x144.png">
<link type="image/png" rel="apple-touch-icon" sizes="152x152" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-152x152.png">
<link type="image/png" rel="apple-touch-icon" sizes="180x180" href="https://images.squarespace-cdn.com/content/v1/61573406e7fd4849327daade/9c4ca1a2-c5e9-461c-87f8-4d8c02b8ff09/apple-touch-icon-180x180.png"></link>