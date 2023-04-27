import { DataType } from "sequelize-typescript";
import { Sequelize } from "sequelize-typescript";
import { Model, Optional } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";

interface UserAttributes {
  id?: number;
  firstName?: String | null;
  lastName?: String | null;
  email?: String | null;
  roleId?: BigInt | null;
  password?: Text;
  accessToken?: Text;
  verified?: Boolean;
  active?: boolean;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserInput, UserAttributes> implements UserInput {
  public id!: number;
  public firstName!: String | null;
  public lastName!: String | null;
  public email!: String | null;
  public roleId!: bigint | null;
  public password!: Text;
  public accessToken!: Text;
  public verified!: Boolean;
  public active?: boolean;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataType.BIGINT,
      primaryKey:true
    },
    firstName: {
      type: DataType.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: true,
    },
    email: {
      type: DataType.STRING,
      allowNull: true,
    },
    roleId: {
      type: DataType.BIGINT,
      allowNull: true,
    },
    password: {
      type: DataType.TEXT,
      allowNull: true,
    },
    accessToken: {
      type: DataType.TEXT,
      allowNull: true,
    },
    verified: { type: DataType.BOOLEAN, allowNull: true },
    active: { type: DataType.BOOLEAN, allowNull: true },
  },
  {
    sequelize: seqlzConnexion,
    timestamps: true,
    underscored: false,
  }
);

export default User;
