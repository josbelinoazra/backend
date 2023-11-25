'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    const admin = [
      {
        name: "Lukas Tanto Kurniawan",
        email: "lukastantokurniawan@gmail.com",
        password: "lukasganteng",
        phone_number: "087883944652",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('admins', admin, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', null, {});
  }
};