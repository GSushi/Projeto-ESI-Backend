const { Model, DataTypes } = require('sequelize');

class Teacher extends Model {
  static init(connection) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize: connection,
      tableName: 'teacher'
    })
  }
  static associate(models) {
    this.belongsTo(models.Ccp, { foreignKey: 'ccpId', as: 'ccp' });
    this.hasMany(models.Students, { foreignKey: 'studentId', as: 'teacher' });
  }
}

module.exports = Teacher;