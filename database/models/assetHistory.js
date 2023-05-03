module.exports = (sequelize, DataTypes) => {
  const AssetHistories = sequelize.define('assetHistories', {
    serialNumber: DataTypes.STRING,
    assetType: DataTypes.STRING,
    Make_Model: DataTypes.STRING,
    purchaseDate: DataTypes.DATE,
    purchaseValue: DataTypes.DECIMAL,
    assignedTo: DataTypes.STRING,
    assignmentDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    reasonForReturn: DataTypes.STRING,
    scrapDate: DataTypes.DATE,
  });
  return AssetHistories;
};
