
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('steps', function(table){
      table.integer('id');
      table.integer('milestone_id');
      table.string('title');
      table.string('description');
      table.boolean('checked');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('steps')
  ])
};
