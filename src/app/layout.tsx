import "@/styles/globals.css";

import { GeistSans } from "geist/font";
import { cookies } from "next/headers";

import { ThemeProvider } from "./_components/theme-provider";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata = {
  title: "Matthew Pryor 👨🏼‍💻",
  description: "Crafting Digital Experiences",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
