import { DataTypes, Model, Optional } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";
import { UserAttributes } from "../../types";
export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserInput, UserAttributes> implements UserInput {
  public id!: number;
  public firstName!: String;
  public lastName!: String;
  public email!: String;
  public roleId!: Number;
  public password!: String;
  public verified!: Boolean;
  public active!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    roleId: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    verified: { type: DataTypes.BOOLEAN, allowNull: true },
    active: { type: DataTypes.BOOLEAN, allowNull: true },
  },
  {
    sequelize: seqlzConnexion,
    timestamps: true,
    underscored: false,
  }
);

export default User;
