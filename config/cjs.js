import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    dir: "dist",
    name: "VLibras",
    format: "cjs",
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
};
