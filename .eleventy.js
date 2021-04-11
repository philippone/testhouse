// 11ty configuration
module.exports = config => {

    return {
        dir: {
            input: 'src',
            includes: "_includes",
            data: "_data",
            output: "_site"
        }

    };
};