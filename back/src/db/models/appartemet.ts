import { DataTypes, Optional, Model } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";
import { Appartementttributes } from "../../types";

export interface AppartementInput extends Optional<Appartementttributes, "id"> {}
export interface AppartementOutpout extends Required<Appartementttributes> {}

class Appartement extends Model<AppartementInput, AppartementOutpout> implements Appartementttributes
{
  public id!: string | undefined;
  public appartement!: string | undefined;
  public loyer!: string | undefined;
  public surface!: string | undefined;
  public adresse_postale!: string | undefined;
}

Appartement.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    appartement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loyer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surface: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    adresse_postale: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize: seqlzConnexion,
    timestamps: true,
    underscored: false,
  }
);

export default Appartement;
