exports.seed = function(knex, Promise) {
  return knex('images').del()
    .then(function () {
      return Promise.all([
        knex('images').insert({
          id: 1,
          file: 'image.jpg',
          created: knex.fn.now()
        }),
        knex('images').insert({
          id: 2,
          file: 'image.jpg',
          created: knex.fn.now()
        }),
        knex('images').insert({
          id: 3,
          file: 'image.jpg',
          created: knex.fn.now()
        })
      ]);
    });
};
