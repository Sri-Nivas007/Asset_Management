module.exports = (sequelize, DataTypes) => {
  const returnAsset = sequelize.define('returnAsset', {
    assetType: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    reasonForReturn: DataTypes.TEXT,
    returnDate: DataTypes.DATE,
  });
  return returnAsset;
};
