import resolve from 'rollup-plugin-node-resolve'
import { terser } from "rollup-plugin-terser"
import gzip from 'rollup-plugin-gzip'

export default {
  input: 'index.js', 

  output: {
    file: './dist/output.rollup.esm.js',
    name: 'test',
    format: 'esm',
    sourcemap: false,
  },

  plugins: [
    resolve(),
    terser(),
    gzip()
  ]
}
