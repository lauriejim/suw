/**
 * Module dependencies
 */

// Services
var UserService = require('../services/UserService');

module.exports = {

  attributes: {
    email: {
      type: 'STRING',
      unique: true
    },
    firstname: {
      type: 'STRING'
    },
    lastname: {
      type: 'STRING'
    },
    password: {
      type: 'STRING'
    },
    entreprise: {
      type: 'STRING'
    },
    expertise: {
      type: 'ARRAY'
    },
    country: {
      type: 'STRING'
    },
    compte: {
      type: 'STRING'
    },
    agence: {
      type: 'STRING'
    },
    iban: {
      type: 'STRING'
    },
    bic: {
      type: 'STRING'
    },
    rank: {
      type: 'STRING'
    },
    demande: {
      collection: 'demande',
      via: 'coach'
    },
    docs: {
      collection: 'doc',
      via: 'owner'
    }
  },

  beforeCreate: function(user, cb) {
    UserService.hashPassword(user)
      .then(function(user) {

        cb();
      })
      .catch(function(err) {
        cb(err);
      });
  }
};