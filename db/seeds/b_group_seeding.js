exports.seed = function(knex, Promise) {
  return knex('groups')
  .del()
  .then(function () {
    return Promise.all([
      knex('groups')
      .insert({
        name: 'Rock & Roll',
        description: 'encourage each other to achieve your life dream'
      })
    ]);
  });
};
