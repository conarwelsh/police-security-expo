
exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function (table) {
		table.increments();
		table.string('email');
		table.string('firstName');
		table.string('lastName');
		table.string('password');
		table.string('facebookId');
		table.string('githubId');
		table.string('googleId');
		table.string('linkedinId');
		table.timestamps();
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
