import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace'
import { terser } from "rollup-plugin-terser";
import nodePolyfills from 'rollup-plugin-polyfill-node';

const extensions = ['.js', '.ts' ];

export default  {
  input: 'index.js',
  output: [
    {
      file: 'lib/bundles/shpwriter.esm.js',
      format: 'esm',
    },
    // {
    //   file: 'lib/bundles/shpwriter.cjs.js',
    //   format: 'cjs',
    // },
    {
      file: 'lib/bundles/shpwriter.esm.min.js',
      format: 'esm',
      plugins: [terser()],
    },
    {
      file: 'lib/bundles/shpwriter.umd.js',
      format: 'umd',
      name: 'shpwriter',
    },
    {
      file: 'lib/bundles/shpwriter.umd.min.js',
      format: 'umd',
      name: 'shpwriter',
      plugins: [terser()],
    }
  ],
  plugins: [
    nodePolyfills(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    resolve({ extensions }),
    commonjs(),//{ namedExports: { 'file-saver': [ 'saveAs' ] } }
    babel({ babelHelpers: 'bundled', include: ['src/**/*.js'], extensions, exclude: 'node_modules/**'})
  ]
}