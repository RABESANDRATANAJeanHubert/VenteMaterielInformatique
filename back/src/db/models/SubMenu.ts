import { Optional, Model, DataTypes } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";

interface SubMenuAttributes {
  id: number | undefined;
  name: string | undefined;
  icon: string | undefined;
  ordering: number | undefined;
  active: boolean | undefined;
  title: string | undefined;
  isTargetSelf: boolean | undefined;
  masterMenuId: number | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubMenuAInput extends Optional<SubMenuAttributes, "id"> {}
export interface SubMenuOutput extends Required<SubMenuAttributes> {}

class SubMenu extends Model implements SubMenuAttributes {
  public title: string | undefined;
  public isTargetSelf: boolean | undefined;
  public masterMenuId: number | undefined;
  public id: number | undefined;
  public name: string | undefined;
  public icon: string | undefined;
  public ordering: number | undefined;
  public active: boolean | undefined;
  public createdAt!: Date;
  public updatedAt!: Date;
}

SubMenu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey:true
    },
    isTargetSelf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    masterMenuId: {
      type: DataTypes.INTEGER,
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

export default SubMenu;
