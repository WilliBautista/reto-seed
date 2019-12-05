const prodConfig = require('./webpack.config.prod');
const devConfig = require('./webpack.config.dev');

function webpackEnviromentSelector(env) {
  if (env.production) return prodConfig;
  if (env.development) return devConfig;
  return devConfig;
}

module.exports = webpackEnviromentSelector;
