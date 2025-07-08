import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    base: "/f8-multiple-page",
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mint: path.resolve(__dirname,"src/index.html"),
                choco: path.resolve(__dirname,"src/choco.html"),
                cafe: path.resolve(__dirname,"src/cafe.html"),
            }
        }
    },
    plugins: [ViteEjsPlugin()],
})