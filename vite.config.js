import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname,"src/index.html"),
                about: path.resolve(__dirname,"src/about.html"),
                contact: path.resolve(__dirname,"src/contact.html"),
            }
        }
    },
    plugins: [ViteEjsPlugin()],
})