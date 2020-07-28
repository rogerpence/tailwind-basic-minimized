const postcssimport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss')('./tailwind/tailwind.config.js');
const cssnano = require('cssnano');

module.exports  = {
    plugins: [
        postcssimport,
        tailwindcss,
        autoprefixer,
        ...process.env.NODE_ENV == 'production' ? [cssnano] : [],
    ],
};
