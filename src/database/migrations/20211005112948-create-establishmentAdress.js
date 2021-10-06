
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EstablishmentsAdress', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      road: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      complement: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EstablishmentsAdress');
  }
};