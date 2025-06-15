// Seed data for personal_details table
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('personal_details').del();

  // Inserts seed entries
  await knex('personal_details').insert([
    { identifier: 'username', details: 'jfullstackdev' },
    {
      identifier: 'bio',
      details:
        'Full Stack Software Developer, ' +
        'GitHub Contributor, ' +
        'GitHub Support Community Member L3, ' +
        'Google & VEX Robotics Certified Educator, ' +
        'ICT & Robotics Instructor',
    },
  ]);
}
