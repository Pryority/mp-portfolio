"use client";
import { useTypewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  const [text, count] = useTypewriter({
    words: [
      "Hello",
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
    // <div className="relative z-50 flex h-screen w-full text-left text-4xl font-light text-primary-foreground opacity-20">
    <p className="absolute bottom-8 right-2 z-50 h-[8px] text-4xl font-extralight text-primary-foreground opacity-20">
      {text}
    </p>

    // </div>
  );
}
