const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WhoClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WhoClass.hasOne(models.Solution, { foreignKey: 'whoClassId' });
    }
  }
  WhoClass.init(
    {
      class: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'WhoClass',
    }
  );
  return WhoClass;
};
