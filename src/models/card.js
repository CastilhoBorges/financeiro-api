import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import BankAccount from "./bankAccount.js";

const Card = sequelize.define("Card", {
  cardId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  bankAccountId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: BankAccount,
      key: "bankAccountId",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  spent: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0,
  },
});

BankAccount.hasMany(Card, { foreignKey: "bankAccountId" });
Card.belongsTo(BankAccount, { foreignKey: "bankAccountId" });

export default Card;
