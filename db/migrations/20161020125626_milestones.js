
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.increments('id');
      table.string('title');
      table.string('description');
      table.boolean('checked');
      table.foreign('goal_id').references('goals.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
