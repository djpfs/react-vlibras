import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "index.esm.js",
    dir: "dist",
    name: "VLibras",
    format: "esm",
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
