
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('goals', function(table){
      table.increments('id');
      table.string('title');
      table.string('description');
      table.date('due_date');
      table.integer('difficulties');
      table.boolean('checked');
      table.foreign('user_id').references('users.id');
      table.foreign('group_id').references('groups.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('goals')
  ])
};
