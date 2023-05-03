module.exports = (sequelize, DataTypes) => {
  const Assets = sequelize.define('assets', {
    type: DataTypes.STRING,
    make_model: DataTypes.STRING,
    serial_number: DataTypes.STRING,
  });
  return Assets;
};
