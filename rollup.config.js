import typescript from '@rollup/plugin-typescript'
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from 'rollup-plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import json from "@rollup/plugin-json";


export default [
    {
        input: 'src/scripts-bundled/index.ts',
        output: {
            file: '_site/scripts/bundle.js',
            format: 'cjs'
        },
        plugins: [
            typescript(),
            nodeResolve({browser: true}),
            commonjs(),
            nodePolyfills()
        ]
    },
    {
        input: 'src/scripts/searchLocation.ts',
        output: {
            file: '_site/scripts/searchLocation.js',
            format: 'iife',
            name: 'searchLocation'
        },
        // context: 'this',
        // moduleContext: 'this',
        plugins: [
            typescript(),
            nodeResolve({browser: true}),
            commonjs(),
            nodePolyfills(),
            json()
        ]
    },
    {
        input: 'src/scripts-bundled/alpine.ts',
        output: {
            file: '_site/scripts/alpine.js',
            format: 'cjs'
        },
        plugins: [
            typescript(),
            nodeResolve({browser: true}),
            commonjs(),
            nodePolyfills()
        ]
    }];