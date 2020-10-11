const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WhoSignal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WhoSignal.hasOne(models.Solution, { foreignKey: 'whoSignalId' });
    }
  }
  WhoSignal.init(
    {
      signal: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'WhoSignal',
    }
  );
  return WhoSignal;
};
