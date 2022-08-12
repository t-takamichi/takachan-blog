import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.API_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.API_MICROCMS_KEY,
});
