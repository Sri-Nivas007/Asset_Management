module.exports = (sequelize, DataTypes) => {
  const assetIssues = sequelize.define('AssetIssues', {
    assetType: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    issueDate: DataTypes.DATE,
  });
  return assetIssues;
};
