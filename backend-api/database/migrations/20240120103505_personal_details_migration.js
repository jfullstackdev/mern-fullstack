// Migrations/20210906123456_create_personal_details.js
exports.up = function(knex) {
    return knex.schema.createTable('personal_details', function(table) {
      table.increments('id');
      table.string('identifier').unique();
      table.text('details');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('personal_details');
  };