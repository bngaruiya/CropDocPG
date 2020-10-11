const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Business.belongsTo(models.User, { foreignKey: 'registeredBy' });
      Business.hasOne(models.Solution, { foreignKey: 'uploadedBy' });
      Business.belongsToMany(models.Solution, {
        through: 'SellerDetail',
        foreignKey: 'sellerId',
      });
    }
  }
  Business.init(
    {
      businessName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      location: DataTypes.GEOMETRY,
    },
    {
      sequelize,
      modelName: 'Business',
    }
  );
  return Business;
};
