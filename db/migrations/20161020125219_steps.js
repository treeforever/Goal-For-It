
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('steps', function(table){
      table.increments('id');
      table.foreign('milestone_id').references('milestones.id');
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
