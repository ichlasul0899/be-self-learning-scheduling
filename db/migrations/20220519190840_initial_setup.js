exports.up = function (knex) {
    return knex.schema
    .dropTableIfExists('users')
    .createTable('users', function (table) {
      table.increments('id');
      table.string('username', 255).unique().notNullable();
      table.string('password', 255).checkLength('>=', 8);
      table.timestamp('deleted_at', { precision: 6 }).defaultTo(null);
      table.timestamps(true, true);
    })
  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTable('users')
  };