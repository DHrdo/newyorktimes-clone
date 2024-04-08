const Dotenv = require('dotenv-webpack');

module.exports = function override(config, env) {
  // Altri elementi della configurazione di Webpack...

  // Aggiungi un fallback per 'crypto' utilizzando crypto-browserify
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify")
  };

  // Aggiungi il plugin Dotenv per caricare le variabili d'ambiente
  config.plugins.push(
    new Dotenv()
  );

  return config;
};