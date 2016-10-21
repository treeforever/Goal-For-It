
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments('id');
      table.string('username');
      table.string('password');
      table.string('email');
    }),
    knex.schema.createTable('groups', function(table){
      table.increments('id');
      table.string('name');
      table.string('description');
    }),
    knex.schema.createTable('users_groups', function(table){
      table.increments('id');
      table.foreign('user_id').references('users.id');
      table.foreign('group_id').references('gourps.id');
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
