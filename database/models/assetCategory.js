module.exports = (sequelize, DataTypes) => {
  const AssetCategory = sequelize.define('assetcategories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return AssetCategory;
};
