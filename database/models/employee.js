module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.STRING,
    department:DataTypes.STRING,
    salary:DataTypes.DECIMAL,
    status:DataTypes.BOOLEAN
  });
  return Employee;
};
