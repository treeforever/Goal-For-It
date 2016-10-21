exports.seed = function (knex, Promise) {
  return knex('milestones')
    .del()
    .then(function () {
      return Promise.all([
        knex('milestones')
        .insert({
          title: "read 'become a developer' book",
          description: 'book is 300 page long. so just read chapters that I need most',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          title: 'learn basic about programming',
          description: 'codeacademy, codeschool, and LHL prep course',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          title: 'research',
          description: 'talk to friends, go to meetup',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          title: 'join a bootcamp',
          description: 'compare requirement, tuition price and quality',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          title: 'buy necessary stuff',
          description: 'make right decisions when it comes to purchase due to limited budget',
          checked: false,
          goal_id: 2
        }),
        knex('milestones')
        .insert({
          title: 'go to classes',
          description: 'Michaels, Groupon class, shop and compare!',
          checked: false,
          goal_id: 2
        }),
        knex('milestones')
        .insert({
          title: 'make cakes',
          description: 'most importantly, get feedback',
          checked: false,
          goal_id: 2
        }),
        knex('milestones')
        .insert({
          title: 'exercise',
          description: 'pulling weight, running, weightloss bootcamp',
          checked: false,
          goal_id: 3
        }),
        knex('milestones')
        .insert({
          title: 'learn costmetics',
          description: '',
          checked: false,
          goal_id: 3
        })
      ]);
    });
};
