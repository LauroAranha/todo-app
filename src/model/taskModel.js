import { Sequelize } from 'sequelize';
import database from '../server/database.js'

const taskModel = database.define('task', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
});

export default taskModel;
