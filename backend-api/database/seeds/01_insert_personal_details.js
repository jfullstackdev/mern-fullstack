// seeds/01_insert_personal_details.js
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('personal_details').del()
      .then(function () {
        // Inserts seed entries
        return knex('personal_details').insert([
          {identifier: 'username', details: 'jdevstatic'},
          {
            identifier: 'bio', 
            details: 'Full Stack Software Developer, ' +
                     'GitHub Contributor, ' +
                     'GitHub Support Community Member L3, ' +
                     'Google & VEX Robotics Certified Educator, ' +
                     'ICT & Robotics Instructor'
          },
        ]);
      });
  };