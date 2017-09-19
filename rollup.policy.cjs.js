import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import resolve from 'rollup-plugin-node-resolve';
//import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/main.js',
    output :{
        file: 'dist/json-extractor-policy.cjs.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            preferBuiltins: true
        }),
        ,eslint()
        ,babel(babelrc())
        //,uglify()
    ]
};
