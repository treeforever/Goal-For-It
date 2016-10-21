exports.seed = function (knex, Promise) {
  return knex('notices')
    .del()
    .then(function () {
      return Promise.all([
        knex('notices')
        .insert({
          type: "notificaiton",
          content: "foo just created a new goal, click here to check it out!"
        }),
        knex('notices')
        .insert({
          type: "notificaiton",
          content: "Jimmy hasn't updated his progress for three days. Send some blueberries to motivate him!"
        }),
        knex('notices')
        .insert({
          type: "notificaiton",
          content: "foo just reached 500 fruits. He is rewarded with a Whip(/wh-PSSSH)!"
        }),
        knex('notices')
        .insert({
          type: "message",
          content: "I challenge you with 200 bananas to finish your book by the weekend!",
          sendor_id: 2,
          receiver_id: 1
        }),
        knex('notices')
        .insert({
          type: "message",
          content: "Challenge accepted!",
          sendor_id: 1,
          receiver_id: 2
        }),
        knex('notices')
        .insert({
          type: "message",
          content: "Wait for your ass to be kicked!",
          sendor_id: 1,
          receiver_id: 2
        })
      ]);
    });
};
