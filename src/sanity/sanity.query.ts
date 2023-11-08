// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";
import type { Project } from "typings";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]`);
}
