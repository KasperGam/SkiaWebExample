import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    babel({
      include: [/node_modules\/(react-native|@react-native)/],
      babelConfig: {
        presets: ["@babel/preset-react"],
        plugins: [
          [
            // this is a fix for reanimated not working in production
            "@babel/plugin-transform-modules-commonjs",
            {
              strict: false,
              strictMode: false, // prevent "use strict" injections
              allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
            },
          ],
        ],
      },
    }),
  ],
});
