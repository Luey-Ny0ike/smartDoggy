/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'smart',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    firebase: {
      apiKey: "AIzaSyAXotTmEv3uslUdHOM7cYMP4_h2pXOMZq4",
authDomain: "smartdoggy2.firebaseapp.com",
databaseURL: "https://smartdoggy2.firebaseio.com",
projectId: "smartdoggy2",
storageBucket: "smartdoggy2.appspot.com",
messagingSenderId: "149709796492"
    },

      // firebase: 'https://smartdoggy-fcb86.firebaseio.com/',
//       torii: {
//   sessionServiceName: 'session',
// },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
