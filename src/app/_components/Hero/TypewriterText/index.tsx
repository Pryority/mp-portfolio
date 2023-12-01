"use client";
import { useTypewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  const [text, count] = useTypewriter({
    words: [
      "Hello, World!",
      "こんにちは",
      "Bonjour",
      "مرحبًا",
      "สวัสดี",
      "Ciao",
      "ہیلو",
      "Γειά σου",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative z-40 flex h-screen w-full text-left text-4xl font-light text-primary-foreground/20">
      <p className="absolute bottom-0 right-2 h-[1px]">{text}</p>
      {/* <span className="absolute bottom-0 h-40 w-40"> </span> */}
    </div>
  );
}
