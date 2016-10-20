
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.integer('id');
      table.integer('goal_id');
      table.string('title');
      table.string('description');
      table.boolean('checked');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
