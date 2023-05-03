module.exports = (sequelize, DataTypes) => {
  const scrapAsset = sequelize.define('scrapAsset', {
    assetType: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    modelNumber: DataTypes.STRING,
    purchaseDate: DataTypes.DATE,
    warrantyExpires: DataTypes.DATE,
  });
  return scrapAsset;
};
