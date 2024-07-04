module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});




//const fs = require('fs');
//const path = require('path');
//
//module.exports = ({ env }) => ({
//  host: env('HOST', '0.0.0.0'),
//  port: env.int('PORT', 1337),
//  url: env('PUBLIC_URL', 'https://momin.contentecho.in'),
//  app: {
//    keys: env.array('APP_KEYS'),
//  },
//  webhooks: {
//    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//  },
  // Enable HTTPS
//  ssl: {
//    enabled: true,
//    key: fs.readFileSync(path.resolve(__dirname, '../ssl/privkey.pem')),
//    cert: fs.readFileSync(path.resolve(__dirname, '../ssl/fullchain.pem')),
//  },
//});
