
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments('id');
      table.string('username');
      table.string('password');
      table.string('email');
    })
    // knex.schema.createTable('groups', function(table){
    //   table.increments('id');
    //   table.string('name');
    //   table.string('description');
    // }),
    // knex.schema.createTable('users_groups', function(table){
    //   table.increments('id');
    //   table.foreign('user_id').references('users.id');
    //   table.foreign('group_id').references('gourps.id');
    // }),
    // knex.schema.createTable('steps', function(table){
    //   table.increments('id');
    //   table.foreign('milestone_id').references('milestones.id');
    //   table.string('title');
    //   table.string('description');
    //   table.boolean('checked');
    // }),
    // knex.schema.createTable('milestones', function(table){
    //   table.increments('id');
    //   table.string('title');
    //   table.string('description');
    //   table.boolean('checked');
    //   table.foreign('goal_id').references('goals.id');
    // }),
    // knex.schema.createTable('goals', function(table){
    //   table.increments('id');
    //   table.string('title');
    //   table.string('description');
    //   table.date('due_date');
    //   table.integer('difficulties');
    //   table.boolean('checked');
    //   table.foreign('user_id').references('users.id');
    //   table.foreign('group_id').references('groups.id');
    // }),
    // knex.schema.createTable('notices', function(table){
    //   table.increments('id');
    //   table.string('type');
    //   table.string('content');
    //   table.integer('sender_id');
    //   table.integer('receiver_id');
    // })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([


    // knex.schema.dropTable('users_groups'),
    // knex.schema.dropTable('goals'),
    knex.schema.dropTable('groups'),
    // knex.schema.dropTable('milestones'),
    // knex.schema.dropTable('steps'),
    // knex.schema.dropTable('notices'),
    // knex.schema.dropTable('users')
  ])
};
