'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    const addCompany = [
      {
        name: "Gojek",
        image_url: "https://www.shutterstock.com/image-vector/logo-vector-new-gojek-partnership-260nw-1545780713.jpg",
        description: "Gojek adalah perusahaan teknologi berbasis aplikasi yang berkantor pusat di Indonesia.",
        web_url: "https://www.gojek.com/id-id/",
        email: "customerservice@gopay.co.id",
        phone_number: "1500729",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Shoope",
        image_url: "https://www.patinews.com/wp-content/uploads/2021/09/IMG-20210920-WA0029.jpg",
        description: "Shopee adalah platform perdagangan elektronik (e-commerce) terkemuka di Asia Tenggara dan Taiwan.",
        web_url: "https://www.shopee.co.id",
        email: "dpo.id@shopee.com.",
        phone_number: "021-39500300",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tiktok",
        image_url: "https://blob.cloudcomputing.id/images/d4e9c208-77de-4a07-84ca-fb950b7b21cc/logo-tiktok-l-min.jpg",
        description: "TikTok adalah platform media sosial yang memungkinkan pengguna untuk membuat, membagikan, dan menonton video singkat.",
        web_url: "https://www.tiktok.com/id-ID/",
        email: "Info@tiktok.com",
        phone_number: "0013132",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('companies', addCompany, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {});
  }
};