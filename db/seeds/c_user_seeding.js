exports.seed = function (knex, Promise) {
  return knex('users')
    .del()
    .then(function () {
      return Promise.all([
        knex('users')
        .insert({
          username: 'foo',
          email: 'foo@foo.com',
          password: 'password'
        }),
        knex('users')
        .insert({
          username: 'Jimmy',
          email: 'jim@jimmy.com',
          password: '1234'
        }),
        knex('users')
        .insert({
          username: 'Frankie',
          email: 'frank@gmail.com',
          password: 'whatever'
        })
      ]);
    });
};
