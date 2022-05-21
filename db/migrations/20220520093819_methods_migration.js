
exports.up = function(knex) {
  return knex.schema.createTable('methods', table=>{
    table.increments('id')
    table.string('methode_title', 255).notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('methods')
};
