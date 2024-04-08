const path = require('path');

module.exports = function override(config, env) {
  // Aggiungi il fallback per risolvere il modulo 'crypto'
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      "crypto": false
    }
  };

  return config;
};