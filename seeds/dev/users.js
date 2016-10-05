var moment = require('moment');
var NOW = moment(Date.now()).format('YYYY/MM/DD HH:mm:ss');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        
        knex('users').insert({
          id: 1,
          email: 'conarw@gmail.com',
          firstName: 'Conar',
          lastName: 'Welsh',
          password: 'secret',
          createdAt: NOW,
          updatedAt: NOW,
        }),

      ]);
    });
};
