
exports.up = function(knex, Promise) {
	return knex.schema.createTable('pages', function (table) {
		table.increments();
		table.string('title');
		table.string('slug');
		table.text('body');
		table.dateTime('publishedAt').notNullable();
		table.dateTime('createdAt').notNullable();
		table.dateTime('updatedAt').notNullable();
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('pages');
};
