'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('users', [{
        name: 'ishan',
        email : 'hello@gmail.com',
        role: "admin",
        createdAt: "2022-03-08T10:02:38.094Z",
        updatedAt: "2022-03-08T10:02:38.094Z",
        uuid: "fea15445-509e-4a83-b253-c92ad5a65ca4",
        
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('users', null, {});
  }
};
