# A basic Tailwind install with minification

It's very easy to add minification to Tailwind.

1. Install CSSNano

    npm install --save-dev cssnano

2. Modify `postcss.config.js`

    This config file includes the `cssnano` package only if NODE_ENV is 'production'

        const postcssimport = require('postcss-import');
        const autoprefixer = require('autoprefixer');
        const tailwindcss = require('tailwindcss')-->
                       ('./tailwind/tailwind.config.js');
        const cssnano = require('cssnano');

        module.exports  = {
            plugins: [
                postcssimport,
                tailwindcss,
                autoprefixer,
                ...process.env.NODE_ENV == 'production'
                    ? [cssnano]
                    : [],
            ],
        };

3. Add `purgecss` to `tailwind.config.js`

        module.exports = {
        purge: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
        ],
        theme: {
            extend: {},
        },
        variants: {},
        plugins: [],
        }

4. Add a `tailwind:prod` key to `package.json's` `scripts` key

        "scripts": {
            "tailwind:dev": "cross-env NODE_ENV=development postcss -->
                 ./tailwind/tailwind.main.css -o ./dist/css/tailwind.css",
            "tailwind:prod": "cross-env NODE_ENV=production postcss -->
                 ./tailwind/tailwind.main.css -o ./dist/css/tailwind.css"
        }

5. Build `tailwind.css` for production:

    npm run tailwind:prod


