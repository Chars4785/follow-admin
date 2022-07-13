import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve'

export default {
  input: "./src/index.tsx",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    // 바벨 트랜스파일러 설정
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    serve({
      open: false,
      contentBase: ['src'],
      host: 'localhost',
      port: 3000,
    }),
    livereload(),
    // 타입스크립트
    typescript(),
  ]
};