var moment = require('moment');
var NOW = moment(Date.now()).format('YYYY/MM/DD HH:mm:ss');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
        	id: 1,
        	email: 'testy@mctesterson.com',
        	firstName: 'Testy',
        	lastName: 'McTesterson',
        	password: 'secret',
        	createdAt: NOW,
        	updatedAt: NOW,
        }),
      ]);
    });
};
