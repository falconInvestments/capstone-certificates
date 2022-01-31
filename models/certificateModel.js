module.exports = (sequelize, DataTypes) => {
  const Certificate = sequelize.define('certificate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    initialAmount: {
      type: DataTypes.DECIMAL(19, 4),
      allowNull: false,
    },
    interestRate: {
      type: DataTypes.DECIMAL(3, 3),
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    maturityDate: {
      type: DataTypes.DATEONLY, // Could alternatively use number of years
    },
    userId: {
      // Foreign key
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Certificate;
};
