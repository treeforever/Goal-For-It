
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('groups', function(table){
      table.increments('id');
      table.string('name');
      table.string('description');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    // knex.schema.dropTable('users')
  ])
};
