import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import client from "@/sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function urlFor(source: string) {
  return imageUrlBuilder(client).auto("format").image(source);
}
