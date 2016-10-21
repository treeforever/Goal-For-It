exports.seed = function (knex, Promise) {
  return knex('steps')
    .del()
    .then(function () {
      return Promise.all([
        knex('steps')
        .insert({
          step: 'read chapter 7',
          checked: false,
          milestone_id: 1
        }),
        knex('steps')
        .insert({
          step: 'read chapter 11',
          checked: false,
          milestone_id: 1
        }),
        knex('steps')
        .insert({
          step: 'codecademy JS',
          checked: false,
          milestone_id: 2
        }),
        knex('steps')
        .insert({
          step: 'codecademy Ruby',
          checked: false,
          milestone_id: 2
        }),
        knex('steps')
        .insert({
          step: 'talk to Jose, learn his perspective and get his advice',
          checked: false,
          milestone_id: 3
        }),
        knex('steps')
        .insert({
          step: 'go to at least 3 meetups and decide if I am on the right path',
          checked: false,
          milestone_id: 3
        }),
        knex('steps')
        .insert({
          step: 'talk to LHL',
          checked: false,
          milestone_id: 4
        }),
        knex('steps')
        .insert({
          step: 'talk to Bitmaker',
          checked: false,
          milestone_id: 4
        }),
        knex('steps')
        .insert({
          step: 'choose one and sign up',
          checked: false,
          milestone_id: 4
        }),
        knex('steps')
        .insert({
          step: 'research all the stuff that I need to buy, see if any friends already have them',
          checked: false,
          milestone_id: 5
        }),
        knex('steps')
        .insert({
          step: 'buy the rest',
          checked: false,
          milestone_id: 5
        }),
        knex('steps')
        .insert({
          step: 'go online see if there are good deals',
          checked: false,
          milestone_id: 6
        }),
        knex('steps')
        .insert({
          step: 'sign up and go to the class',
          checked: false,
          milestone_id: 6
        }),
        knex('steps')
        .insert({
          step: 'make a cheesecake',
          checked: false,
          milestone_id: 7
        }),
        knex('steps')
        .insert({
          step: 'invite baker friends to taste and guide',
          checked: false,
          milestone_id: 7
        }),
        knex('steps')
        .insert({
          step: 'invite family to taste',
          checked: false,
          milestone_id: 7
        }),
        knex('steps')
        .insert({
          step: 'lose 5lb with good diet plan',
          checked: false,
          milestone_id: 8
        }),
        knex('steps')
        .insert({
          step: 'lose another 5lb with weightloss bootcamp',
          checked: false,
          milestone_id: 8
        }),
        knex('steps')
        .insert({
          step: 'lose another 5lb with crazy work-out',
          checked: false,
          milestone_id: 8
        }),
        knex('steps')
        .insert({
          step: 'learn eye costmetics',
          checked: false,
          milestone_id: 9
        }),
        knex('steps')
        .insert({
          step: 'learn facial costmetics',
          checked: false,
          milestone_id: 9
        }),
        knex('steps')
        .insert({
          step: 'learn how pagetns dress up',
          checked: false,
          milestone_id: 9
        })
      ]);
    });
};
