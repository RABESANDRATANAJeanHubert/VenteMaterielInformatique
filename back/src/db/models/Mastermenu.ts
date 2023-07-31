import { Optional, Model, DataTypes } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";
import { MasterMenuAttributes } from "../../types";

export interface MasterInput extends Optional<MasterMenuAttributes, "id"> {}
export interface MasterOutput extends Required<MasterMenuAttributes> {}

class MasterMenu extends Model implements MasterMenuAttributes {
  public id: number | undefined;
  public name: string | undefined;
  public icon: string | undefined;
  public ordering: number | undefined;
  public active: boolean | undefined;
  public createdAt!: Date;
  public updatedAt!: Date;
}

MasterMenu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ordering: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
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

export default MasterMenu;
