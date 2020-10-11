const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Solution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Solution.belongsTo(models.Business, { foreignKey: 'uploadedBy' });
      Solution.belongsTo(models.SolutionType, { foreignKey: 'solutionTypeId' });
      Solution.belongsTo(models.WhoClass, { foreignKey: 'whoClassId' });
      Solution.belongsTo(models.WhoSignal, { foreignKey: 'whoSignalId' });
      Solution.belongsToMany(models.PlantDisease, {
        through: 'DiseaseSolution',
      });
      Solution.belongsToMany(models.Business, {
        through: 'SellerDetail',
        foreignKey: 'solutionId',
      });
    }
  }
  Solution.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      applicationRate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Solution',
    }
  );
  return Solution;
};
