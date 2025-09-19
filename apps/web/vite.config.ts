import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "node:path";
import DevConfig from "./vite.config.dev";
import ProdConfig from "./vite.config.prod";
import { Extensions } from "./vite.extensions";

const canvaskit = import.meta.resolve("canvaskit-wasm").replace("file://", "");
const canvaskitPath = path.dirname(canvaskit);
const relative = path.relative(import.meta.dirname, canvaskitPath);

const extensions = Extensions;
const development = process.env.NODE_ENV === "development";

const base = development ? DevConfig : ProdConfig;

export default defineConfig({
  define: {
    global: "self",
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    __DEV__: JSON.stringify(false),
    DEV: JSON.stringify(development),
    ...(base.define ?? {}),
  },
  resolve: {
    extensions,
    alias: [
      { find: /(.+\/)?react-native$/, replacement: "react-native-web" },
      {
        find: /react-native\/(?!\/Libraries\/Image\/AssetRegistry)$/,
        replacement: "react-native-web/",
      },
      {
        find: "react-native/Libraries/Image/AssetRegistry",
        replacement: "react-native-web/dist/modules/AssetRegistry",
      },
    ],
    dedupe: ["react", "react-native-reanimated", "@shopify/react-native-skia"],
  },
  build: base.build,
  plugins: [
    react({
      babel: {
        plugins: [
          "@babel/plugin-transform-export-namespace-from",
          "react-native-worklets/plugin",
        ],
      },
    }),
    nodePolyfills(),
    viteStaticCopy({
      targets: [
        {
          src: `${relative}/full/canvaskit.wasm`,
          dest: ".",
        },
      ],
    }),
    ...(base.plugins ?? []),
  ],
  optimizeDeps: base.optimizeDeps,
});
