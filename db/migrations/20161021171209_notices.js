
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('notices', function(table){
      table.increments('id');
      table.string('type');
      table.string('content');
      table.integer('sender_id');
      table.integer('receiver_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('notices')
  ])
};
