const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PlantDisease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlantDisease.belongsTo(models.Plant, { foreignKey: 'plantId' });
      PlantDisease.hasOne(models.Prediction, { foreignKey: 'predictionId' });
      PlantDisease.hasOne(models.Unknown, { foreignKey: 'diseaseId' });
      PlantDisease.belongsToMany(models.Solution, {
        through: 'DiseaseSolution',
      });
    }
  }
  PlantDisease.init(
    {
      name: DataTypes.STRING,
      symptoms: {
        type: DataTypes.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue('symptoms'));
        },
        set: function (val) {
          return this.setDataValue('symptoms', val.toString().toLowerCase());
        },
      },
      causalAgent: {
        type: DataTypes.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue('causalAgent'));
        },
        set: function (val) {
          return this.setDataValue('causalAgent', val.toString().toLowerCase());
        },
      },
      envFactors: {
        type: DataTypes.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue('envFactors'));
        },
        set: function (val) {
          return this.setDataValue('envFactors', val.toString().toLowerCase());
        },
      },
      mitigation: {
        type: DataTypes.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue('mitigation'));
        },
        set: function (val) {
          return this.setDataValue('mitigation', val.toString().toLowerCase());
        },
      },
    },
    {
      sequelize,
      modelName: 'PlantDisease',
    }
  );
  return PlantDisease;
};
