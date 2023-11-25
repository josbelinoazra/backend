'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    const addUsers = [
      {
        firstName: "Fazzy",
        lastName: "Nurfitratul Rahman",
        email: "fazzynurfitratulrahman@gmail.com",
        password: "fazyyganteng",
        phone_number: "085335015609",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Zevan",
        lastName: "Adhyasta Fachrisya",
        email: "zevanadhyastafahrisya@gmail.com",
        password: "zevanganteng",
        phone_number: "08174140802",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Jos",
        lastName: "Belino Azra",
        email: "josbelinoazra@gmail.com",
        password: "josganteng",
        phone_number: "081267133185",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Fajar",
        lastName: "Alpinnato",
        email: "fajaralpinnato@gmail.com",
        password: "fajarganteng",
        phone_number: "081292770680",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Nugraha",
        lastName: "Saputra",
        email: "nugrahasaputra@gmail.com",
        password: "nugrahaganteng",
        phone_number: "081528493879",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Muhammad",
        lastName: "Edwan Nidzar",
        email: "muhammadedwannidzar@gmail.com",
        password: "edwanganteng",
        phone_number: "0895605330279",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Muhammad",
        lastName: "Nur",
        email: "muhammadnur@gmail.com",
        password: "nurganteng",
        phone_number: "0895330944736",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('users', addUsers, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};