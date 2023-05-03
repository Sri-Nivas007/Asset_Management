module.exports = (sequelize, DataTypes) => {
    const stockViews = sequelize.define('stockViews', {
      assetType: DataTypes.STRING,
      branch: DataTypes.STRING,
      totalAssets: DataTypes.INTEGER,
      totalValue: DataTypes.INTEGER,
    });
    return stockViews;
  };
  
