import { defineConfig } from "$fresh/server.ts";
import tailwind from "@pakornv/fresh-plugin-tailwindcss";
import config from "./config.json" with { type: "json" };
import fs from "node:fs";

export default defineConfig({
  plugins: [tailwind()],
  server: {
    cert: config.cert ? fs.readFileSync(config.cert, "utf-8") : undefined,
    key: config.key ? fs.readFileSync(config.key, "utf-8") : undefined,
    port: config.port,
    hostname: config.hostname ? config.hostname : undefined,
  },
  build: {
    target: "es2015",
  },
});
