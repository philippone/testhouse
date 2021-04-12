const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


// 11ty configuration
module.exports = config => {
    config.addPlugin(eleventyNavigationPlugin);

    return {
        dir: {
            input: 'src',
            includes: "_includes",
            data: "_data",
            output: "_site"
        }

    };
};