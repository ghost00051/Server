import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Task = sequelize.define("task", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    UserID: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.STRING, allowNull: false },
    tasktitle: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'tasks'
});

export default Task;