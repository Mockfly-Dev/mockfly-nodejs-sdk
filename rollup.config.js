import babel from 'rollup-plugin-babel'
import dotenvPlugin from 'rollup-plugin-dotenv'
import dotenv from 'dotenv'

dotenv.config()

export default {
  input: 'src/index.js',
  output: [
    {
      file: `lib/${process.env.SDK_OUTPUT_NAME}`,
      format: 'iife',
      name: 'mockfly',
    },
  ],
  plugins: [babel({ presets: [['@babel/preset-env', { modules: false }]] }), dotenvPlugin()],
}