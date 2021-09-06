'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('avaliations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      forms_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'forms', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comentario_CCP: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      avaliacao_CCP: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comentario_orientador: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avaliacao_orientador: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_reavaliation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('avaliations');
  },
};