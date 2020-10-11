const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Unknown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Unknown.belongsTo(models.User, { foreignKey: 'uploadedBy' });
      Unknown.belongsTo(models.PlantDisease, { foreignKey: 'diseaseId' });
      Unknown.belongsTo(models.Plant, { foreignKey: 'plantId' });
    }
  }
  Unknown.init(
    {
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Unknown',
    }
  );
  return Unknown;
};
