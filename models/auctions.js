const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // 경매 테이블
  const Auction = sequelize.define(
    "Auction",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false,
      },
      minPrice: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        unique: false,
        defaultValue: 0,
      },
    },
    {
      sequelize: sequelize,
      charset: "utf8",
      collation: "utf8_general_ci",
      timestamps: true,
      paranoid: true,
      modelName: "Auction",
      tableName: "auctions",
    }
  );

  Auction.associate = (db) => {
    db.Auction.belongsTo(db.Car, {
      foreignKey: "carId",
      targetKey: "id",
      as: "car",
    });
    db.Auction.belongsToMany(db.User, {
      through: db.AuctionBidding,
    });
  };

  return Auction;
};
