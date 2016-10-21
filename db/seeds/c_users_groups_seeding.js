exports.seed = function(knex, Promise) {
  return knex('users_groups')
  .del()
  .then(function () {
    return Promise.all([
      knex('users_groups')
      .insert({
        user_id: 1,
        group_id: 1
      }),
      knex('users_groups')
      .insert({
        user_id: 2,
        group_id: 1
      }),
      knex('users_groups')
      .insert({
        user_id: 3,
        group_id: 1
      })
    ]);
  });
};
