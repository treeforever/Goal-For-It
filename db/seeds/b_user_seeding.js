exports.seed = function (knex, Promise) {
  return knex('users')
    .del()
    .then(function () {
      return Promise.all([
        knex('users')
        .insert({
          username: 'foo',
          email: 'foo@foo.com',
          password: 'password',
          user_money: 0,
          group_money: null,
          group_id: 1
        }),
        knex('users')
        .insert({
          username: 'Jimmy',
          email: 'jim@jimmy.com',
          password: '1234',
          user_money: 0,
          group_money: null,
          group_id: 1
        }),
        knex('users')
        .insert({
          username: 'Frankie',
          email: 'frank@gmail.com',
          password: 'whatever',
          user_money: 0,
          group_money: null,
          group_id: 1
        })
      ]);
    });
};
