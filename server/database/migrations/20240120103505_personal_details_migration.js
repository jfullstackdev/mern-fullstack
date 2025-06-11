// Migration for personal_details table
export function up(knex) {
  return knex.schema.createTable('personal_details', function (table) {
    table.increments('id');
    table.string('identifier').unique();
    table.text('details');
  });
}

export function down(knex) {
  return knex.schema.dropTable('personal_details');
}
