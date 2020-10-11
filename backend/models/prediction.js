const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Prediction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prediction.belongsTo(models.PlantDisease, { foreignKey: 'predictionId' });
      Prediction.belongsTo(models.User, { foreignKey: 'uploadedBy' });
    }
  }
  Prediction.init(
    {
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Prediction',
    }
  );
  return Prediction;
};
