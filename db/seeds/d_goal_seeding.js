exports.seed = function (knex, Promise) {
  return knex('goals')
    .del()
    .then(function () {
      return Promise.all([
        knex('goals')
        .insert({
          goal: 'Become a developer',
          goal_description: 'become a junior developer in 4 months',
          due_date: '2017-10-19 10:23:54+02',
          difficulties: 5,
          checked: false,
          creator_id: 1,
          group_id: 1
        }),
        knex('goals')
        .insert({
          goal: 'make rocking cheesecake and other desserts',
          goal_description: 'know how to bake cheesecake, apple pie for holidays',
          due_date: '2017-10-19 10:23:54+02',
          difficulties: 3,
          checked: false,
          creator_id: 1,
          group_id: 1
        }),
        knex('goals')
        .insert({
          goal: 'attend beauty pageants contest',
          goal_description: 'lose 20 pounds, get muscules, learn cosmetics',
          due_date: '2017-10-19 10:23:54+02',
          difficulties: 4,
          checked: false,
          creator_id: 2,
          group_id: 1
        }),
        knex('goals')
        .insert({
          goal: 'hold a photography exhibition',
          goal_description: 'plan an exhibition in a year with 100 photos',
          due_date: "2017-10-19 10:23:54+02",
          difficulties: 3,
          checked: false,
          creator_id: 3,
          group_id: 1
        }),
        knex('goals')
        .insert({
          goal: 'swim cross Ontario Lake',
          goal_description: 'strengthen willpower, exercise',
          due_date: "2017-10-19 10:23:54+02",
          difficulties: 5,
          checked: false,
          creator_id: 3,
          group_id: 1
        })
      ]);
    });
};
