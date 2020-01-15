module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/guitar-note-trainer/'
    : '/',
  outputDir: 'docs',
  productionSourceMap: false,
};
