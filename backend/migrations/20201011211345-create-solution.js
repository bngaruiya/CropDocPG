module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Solutions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      applicationRate: {
        type: Sequelize.STRING,
      },
      uploadedBy: {
        type: Sequelize.INTEGER,
      },
      solutionFor: {
        type: Sequelize.INTEGER,
      },
      solutionTypeId: {
        type: Sequelize.INTEGER,
      },
      whoClassId: {
        type: Sequelize.INTEGER,
      },
      whoSignalId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Solutions');
  },
};
