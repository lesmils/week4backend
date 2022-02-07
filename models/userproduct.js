"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userProduct.belongsTo(models.product, { foreignKey: "productId" });
      userProduct.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  userProduct.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userProduct",
    }
  );
  return userProduct;
};
