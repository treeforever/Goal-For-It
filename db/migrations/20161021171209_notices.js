
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('notices', function(table){
      table.increments('id');
      table.string('type');
      table.string('content');
      table.foreign('sender_id').references('usres.id');
      table.foreign('receiver_id').references('usres.id');
      })
    ])
  };

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('notices')
  ])
};
