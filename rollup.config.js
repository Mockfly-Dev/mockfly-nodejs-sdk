import babel from 'rollup-plugin-babel'
import dotenvPlugin from 'rollup-plugin-dotenv'
import dotenv from 'dotenv'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

dotenv.config()

export default {
  input: 'src/index.js',
  output: [
    {
      file: `lib/${process.env.SDK_OUTPUT_NAME}`,
      format: 'umd',
      name: 'mockfly',
    },
  ],
  plugins: [nodeResolve(), commonjs(), json(), babel({ exclude: 'node_modules/**', presets: [['@babel/preset-env', { modules: false, }]] }), dotenvPlugin()],
}