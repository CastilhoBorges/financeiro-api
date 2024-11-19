import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./user.js";

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
});

User.hasOne(Accounts, { foreignKey: "userId" });
Accounts.belongsTo(User, { foreignKey: "userId" });

export default Accounts;
