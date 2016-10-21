exports.seed = function (knex, Promise) {
  return knex('steps')
    .del()
    .then(function () {
      return Promise.all([
        knex('steps')
        .insert({
          description: 'read chapter 7',
          checked: false,
          milestone_id: 1
        }),
        knex('steps')
        .insert({
          description: 'read chapter 11',
          checked: false,
          milestone_id: 1
        }),
        knex('steps')
        .insert({
          description: 'codecademy JS',
          checked: false,
          milestone_id: 2
        }),
        knex('steps')
        .insert({
          description: 'codecademy Ruby',
          checked: false,
          milestone_id: 2
        }),
        knex('steps')
        .insert({
          description: 'talk to Jose, learn his perspective and get his advice',
          checked: false,
          milestone_id: 3
        }),
        knex('steps')
        .insert({
          description: 'go to at least 3 meetups and decide if I am on the right path',
          checked: false,
          milestone_id: 3
        }),
        knex('steps')
        .insert({
          description: 'talk to LHL',
          checked: false,
          milestone_id: 4
        }),
        knex('steps')
        .insert({
          description: 'talk to Bitmaker',
          checked: false,
          milestone_id: 4
        }),
        knex('steps')
        .insert({
          description: 'choose one and sign up',
          checked: false,
          milestone_id: 4
        }),
        knex('steps')
        .insert({
          description: 'research all the stuff that I need to buy, see if any friends already have them',
          checked: false,
          milestone_id: 5
        }),
        knex('steps')
        .insert({
          description: 'buy the rest',
          checked: false,
          milestone_id: 5
        }),
        knex('steps')
        .insert({
          description: 'go online see if there are good deals',
          checked: false,
          milestone_id: 6
        }),
        knex('steps')
        .insert({
          description: 'sign up and go to the class',
          checked: false,
          milestone_id: 6
        }),
        knex('steps')
        .insert({
          description: 'make a cheesecake',
          checked: false,
          milestone_id: 7
        }),
        knex('steps')
        .insert({
          description: 'invite baker friends to taste and guide',
          checked: false,
          milestone_id: 7
        }),
        knex('steps')
        .insert({
          description: 'invite family to taste',
          checked: false,
          milestone_id: 7
        }),
        knex('steps')
        .insert({
          description: 'lose 5lb with good diet plan',
          checked: false,
          milestone_id: 8
        }),
        knex('steps')
        .insert({
          description: 'lose another 5lb with weightloss bootcamp',
          checked: false,
          milestone_id: 8
        }),
        knex('steps')
        .insert({
          description: 'lose another 5lb with crazy work-out',
          checked: false,
          milestone_id: 8
        }),
        knex('steps')
        .insert({
          description: 'learn eye costmetics',
          checked: false,
          milestone_id: 9
        }),
        knex('steps')
        .insert({
          description: 'learn facial costmetics',
          checked: false,
          milestone_id: 9
        }),
        knex('steps')
        .insert({
          description: 'learn how pagetns dress up',
          checked: false,
          milestone_id: 9
        })
      ]);
    });
};
