import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      name: 'typed_keys',
      file: 'dist/typed-keys.js',
      format: 'iife'
    },
    {
      name: 'typed_keys',
      file: 'dist/typed-keys.min.js',
      format: 'iife',
      plugins: [terser()]
    },
  ],
  plugins: [
    typescript({ tsconfig: 'tsconfig-dist.json' }),
  ],
  watch: {
    include: ['src/**/*']
  }
};
