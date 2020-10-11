module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('SellerDetails', {
        solutionId: {
          type: Sequelize.INTEGER,
        },
        sellerId: {
          type: Sequelize.INTEGER,
        },
        quantity: {
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.FLOAT,
        },
        customerRating: {
          type: Sequelize.FLOAT,
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
      })
      .then(() =>
        queryInterface.addConstraint('SellerDetails', {
          fields: ['solutionId', 'sellerId'],
          type: 'primary key',
          name: 'sellerDetailId',
        })
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SellerDetails');
  },
};
