import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Accounts } from "./accounts.js";

export const BankAccount = sequelize.define("BankAccount", {
  bankAccountId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  accountId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Accounts,
      key: "accountId",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bank: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  entries: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0,
  },
  exits: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0,
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
  cardsNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
