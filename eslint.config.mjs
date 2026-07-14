import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // IGNORAR directorios de build
    ignores: [
      'dist/**',      // Directorio de salida de Next.js
      '.next/**',     // Directorio temporal de Next.js
      'node_modules/**',
      'out/**',
    ],
  },
];

export default eslintConfig;