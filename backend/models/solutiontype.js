const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SolutionType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SolutionType.hasOne(models.Solution, { foreignKey: 'solutionTypeId' });
    }
  }
  SolutionType.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'SolutionType',
    }
  );
  return SolutionType;
};
