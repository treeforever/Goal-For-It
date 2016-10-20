
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.integer('id');
      table.string('username');
      table.string('password');
      table.string('email');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
