exports.seed = function (knex, Promise) {
  return knex('goals')
    .del()
    .then(function () {
      return Promise.all([
        knex('goals')
        .insert({
          title: 'Become a developer',
          description: 'become a junior developer in 4 months',
          due_date: nil,
          difficulties: nil,
          checked: false,
          creator_id: 1,
          group_id: 1
        }),
        knex('goals')
        .insert({
          title: 'make rocking cheesecake and other desserts',
          description: 'know how to bake cheesecake, apple pie for holidays',
          due_date: nil,
          difficulties: nil,
          checked: false,
          creator_id: 1,
          group_id: 1
        }),
        knex('goals')
        .insert({
          title: 'attend beauty pageants contest',
          description: 'lose 20 pounds, get muscules, learn cosmetics',
          due_date: nil,
          difficulties: nil,
          checked: false,
          creator_id: 2,
          group_id: 1
        })
        // knex('goals')
        // .insert({
        //   title: 'hold a photography exhibition',
        //   description: 'plan an exhibition in a year with 100 photos',
        //   due_date: nil,
        //   difficulties: nil,
        //   checked: false,
        //   creator_id: 3,
        //   group_id: 1
        // }),
        // knex('goals')
        // .insert({
        //   title: 'swim cross Ontario Lake',
        //   description: 'strengthen willpower, exercise',
        //   due_date: nil,
        //   difficulties: nil,
        //   checked: false,
        //   creator_id: 3,
        //   group_id: 1
        // })
      ]);
    });
};
