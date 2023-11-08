// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "l92xza2r",
  dataset: "production",
  apiVersion: "2023-11-08",
  useCdn: false,
};

const client = createClient(config);

export default client;
