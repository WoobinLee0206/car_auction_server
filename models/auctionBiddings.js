const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // 경매 입찰 테이블
  const AuctionBidding = sequelize.define(
    "AuctionBidding",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Price: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
      charset: "utf8",
      collation: "utf8_general_ci",
      timestamps: true,
      paranoid: true,
      modelName: "AuctionBidding",
      tableName: "auctionBiddings",
    }
  );

  return AuctionBidding;
};
