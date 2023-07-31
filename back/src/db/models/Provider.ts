import { DataTypes, Model, Optional } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";
import { ProviderAttributes } from "../../types";

export interface ProviderInput extends Optional<ProviderAttributes, "id"> {}
export interface ProviderOutpout extends Required<ProviderAttributes> {}

export class Provider
  extends Model<ProviderInput, ProviderOutpout>
  implements ProviderAttributes
{
  public id!: number | undefined;
  name: string | undefined;
  location: string | undefined;
}

Provider.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: seqlzConnexion,
    underscored: false,
  }
);
