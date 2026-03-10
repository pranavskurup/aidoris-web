import { defineConfig } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import viteTsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import { nitro } from "nitro/vite"

const config = defineConfig(() => {
  const devPort = Number(process.env.AIDORIS_WEB_DEV_PORT) || 4501

  return {
    server: {
      port: devPort, // <-- change this to your desired dev port
    },
    plugins: [
      nitro({
        preset: "deno-server",
        output: {
          dir: ".output",
        }
      }),
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
      tanstackStart(),
      viteReact(),
    ]
  }
})

export default config