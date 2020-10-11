module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlantDiseases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      plantId: {
        type: Sequelize.INTEGER,
      },
      symptoms: {
        type: Sequelize.TEXT,
      },
      causalAgent: {
        type: Sequelize.STRING,
      },
      envFactors: {
        type: Sequelize.TEXT,
      },
      mitigation: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlantDiseases');
  },
};
