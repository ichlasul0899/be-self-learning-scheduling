exports.up = function(knex) {
  return knex.schema.createTable('activities', table =>{
    table.increments('id')
    table.integer('method').unsigned().notNullable();
    table.integer('user').unsigned().notNullable();
    table.string('title', 255).notNullable();
    table.date('start_date').defaultTo(null)
    table.date('end_date').defaultTo(null)
    table.timestamp('deleted_at', { precision: 6 }).defaultTo(null);
    table.timestamps(true, true);
    table.foreign('method').references('id').inTable('methods');
    table.foreign('user').references('id').inTable('users');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('activities')
};
