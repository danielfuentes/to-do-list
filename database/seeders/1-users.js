const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Miguel Fort",
          email: "miguel@gmail.com",
          password: bcrypt.hashSync("Isdi2022*", 10),
          isAdmin: true,
        },
        {
          username: "Daniel Fuentes",
          email: "dfuentes@gmail.com",
          password: bcrypt.hashSync("Isdi2022*", 10),
          isAdmin: true,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
