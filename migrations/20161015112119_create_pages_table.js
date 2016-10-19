
exports.up = function(knex, Promise) {
	return knex.schema.createTable('pages', function (table) {
		table.increments();
		table.string('title');
		table.string('slug');
		table.text('body');
		table.dateTime('publishedAt').defaultTo(null);
		table.dateTime('createdAt').notNullable().defaultTo(knex.raw('now()'));
		table.dateTime('updatedAt').notNullable().defaultTo(knex.raw('now()'));
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('pages');
};
