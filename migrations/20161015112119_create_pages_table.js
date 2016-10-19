
exports.up = function(knex, Promise) {
	return knex.schema.createTable('pages', function (table) {
		table.increments();
		table.string('title');
		table.string('slug');
		table.text('body');
		table.dateTime('published_at').defaultTo(null);
		table.timestamps();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('pages');
};
