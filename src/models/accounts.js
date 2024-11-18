import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import User from "./users.js";

const Accounts = sequelize.define("Account", {
  accountId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "userId",
    },
  },
  money: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
});

User.hasOne(Accounts, { foreignKey: "userId" });
Accounts.belongsTo(User, { foreignKey: "userId" });

export default Accounts;
