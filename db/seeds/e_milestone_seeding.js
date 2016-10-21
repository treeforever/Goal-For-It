exports.seed = function (knex, Promise) {
  return knex('milestones')
    .del()
    .then(function () {
      return Promise.all([
        knex('milestones')
        .insert({
          mile_title: "read 'become a developer' book",
          mile_description: 'book is 300 page long. so just read chapters that I need most',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          mile_title: 'learn basic about programming',
          mile_description: 'codeacademy, codeschool, and LHL prep course',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          mile_title: 'research',
          mile_description: 'talk to friends, go to meetup',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          mile_title: 'join a bootcamp',
          mile_description: 'compare requirement, tuition price and quality',
          checked: false,
          goal_id: 1
        }),
        knex('milestones')
        .insert({
          mile_title: 'buy necessary stuff',
          mile_description: 'make right decisions when it comes to purchase due to limited budget',
          checked: false,
          goal_id: 2
        }),
        knex('milestones')
        .insert({
          mile_title: 'go to classes',
          mile_description: 'Michaels, Groupon class, shop and compare!',
          checked: false,
          goal_id: 2
        }),
        knex('milestones')
        .insert({
          mile_title: 'make cakes',
          mile_description: 'most importantly, get feedback',
          checked: false,
          goal_id: 2
        }),
        knex('milestones')
        .insert({
          mile_title: 'exercise',
          mile_description: 'pulling weight, running, weightloss bootcamp',
          checked: false,
          goal_id: 3
        }),
        knex('milestones')
        .insert({
          mile_title: 'learn costmetics',
          mile_description: '',
          checked: false,
          goal_id: 3
        })
      ]);
    });
};
