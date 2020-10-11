const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SellerDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SellerDetail.init(
    {
      quantity: DataTypes.STRING,
      price: DataTypes.FLOAT,
      customerRating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'SellerDetail',
    }
  );
  return SellerDetail;
};
