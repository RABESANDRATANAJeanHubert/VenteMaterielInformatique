import { DataTypes, Model, Optional } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";

interface ProviderAttributes {
  id?: number;
  name: string | undefined;
  location: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProviderInput extends Optional<ProviderAttributes, "id"> {}
export interface ProviderOutpout extends Required<ProviderAttributes> {}

 export class Provider
  extends Model<ProviderInput, ProviderOutpout>
  implements ProviderAttributes
{
  public id!: number | undefined;
  name: string | undefined;
  location: string | undefined;
  createdAt!: Date;
  updatedAt!: Date;
}

Provider.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    sequelize: seqlzConnexion,
    underscored: false,
  }
);

