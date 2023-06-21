import { DataTypes, Model, Optional } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";
import { ClientAttributes } from "../../types";

export interface ClientInput extends Optional<ClientAttributes, "id"> {}
export interface CLientOutpout extends Required<ClientAttributes> {}

export class Client
  extends Model<ClientInput, CLientOutpout>
  implements ClientAttributes
{
  public id!: string | undefined;
  public name!: String;
  public lastName!: string | null | undefined;
  public phone: number | undefined;
  public email: string | undefined;
  public address!: string | null;
}
Client.init(
  {
    id: {
      autoIncrement: true,
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: seqlzConnexion,
    timestamps: true,
    underscored: false,
  }
);
