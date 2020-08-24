const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Car = sequelize.define(
    "Car",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      modelName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
      manufacture: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: false,
      },
      vin: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: false,
      },
    },
    {
      sequelize: sequelize,
      charset: "utf8",
      collation: "utf8_general_ci",
      timestamps: true,
      paranoid: true,
      modelName: "Car",
      tableName: "cars",
    }
  );

  Car.associate = (db) => {
    db.Car.belongsTo(db.User, {
      foreignKey: "ownerId",
      targetKey: "id",
      as: "owner",
    });
    db.Car.hasOne(db.Auction, {
      foreignKey: "carId",
      sourceKey: "id",
      as: "inAuction",
    });
  };

  return Car;
};
