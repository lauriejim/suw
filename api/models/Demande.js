/**
 * Demande.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    project: {
      model: 'project'
    },
    coach: {
      model: 'user'
    },
    type: {
      type: 'STRING'
    },
    comment: {
      type: 'STRING'
    },
    hours: {
      type: 'STRING'
    },
    weeks: {
      type: 'STRING'
    },
    price: {
      type: 'STRING'
    },
    validated: {
      type: 'BOOLEAN'
    },
    open: {
      type: 'BOOLEAN'
    }
  }
};