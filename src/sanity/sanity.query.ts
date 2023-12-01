// sanity/sanity.query.ts

import { groq } from "next-sanity";
import client from "./sanity.client";
import type { Experience, Project, Skill, Social } from "@/../typings";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]`);
}

export async function getSocials(): Promise<Social[]> {
  return client.fetch(groq`*[_type == "social"]`);
}

export async function getSkills(): Promise<Skill[]> {
  return client.fetch(groq`*[_type == "skill"]`);
}

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch(groq`*[_type == "experience"]`);
}
