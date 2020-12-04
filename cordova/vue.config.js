const prod = process.env.NODE_ENV === "production";

module.exports = {
    publicPath: './',
    productionSourceMap:  !prod,
    outputDir: 'app/www',
};