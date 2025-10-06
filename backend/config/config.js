// backend/config/config.js
const config = {
    development: {
      MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/online-shop-dev',
      PORT: process.env.PORT || 5000
    },
    production: {
      MONGODB_URI: process.env.MONGODB_URI,
      PORT: process.env.PORT || 5000
    }
  };
  
  module.exports = config[process.env.NODE_ENV || 'development'];