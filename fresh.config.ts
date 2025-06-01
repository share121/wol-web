import { defineConfig } from "$fresh/server.ts";
import tailwind from "@pakornv/fresh-plugin-tailwindcss";
import config from "./config.json" with { type: "json" };

export default defineConfig({
  plugins: [tailwind()],
  server: {
    cert: config.cert ? config.cert : undefined,
    key: config.key ? config.key : undefined,
    port: config.port,
    hostname: config.hostname ? config.hostname : undefined,
  },
});
