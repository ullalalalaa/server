exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', function(table){
      table.increments('id').primary();
      table.string('file');
      table.timestamp('created');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('images')
  ]);
};
