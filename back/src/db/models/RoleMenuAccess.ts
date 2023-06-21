import { Optional,Model, DataTypes } from "sequelize";
import seqlzConnexion from "../../config/dbConnect";
import SubMenu from "./SubMenu";
import Role from "./Role";

interface MenuAccessAttributes{
  id:number;
  roleId?:number | null;
  subMenuId?: number | null;
  active:boolean;
}

export interface MenuAccessInput extends Optional <MenuAccessAttributes,"id">{}
export interface MenuAccesOutput extends Required<MenuAccessAttributes>{}

export class RoleMenuAccess extends Model <MenuAccessInput,MenuAccesOutput> implements MenuAccessAttributes {
  id!: number;
  roleId!: number;
  subMenuId!: number;
  active!: boolean;
}
RoleMenuAccess.belongsTo(SubMenu,{
  foreignKey:'subMenuId'
});
RoleMenuAccess.belongsTo(Role,{
  foreignKey:'roleId'
})
RoleMenuAccess.init({
  id:{
    type:DataTypes.BIGINT,
    autoIncrement:true,
    allowNull:false
  },
  roleId:{
    type:DataTypes.BIGINT,

  },
  subMenuId:{
    type:DataTypes.BIGINT,

  },
  active:{
    type:DataTypes.BOOLEAN,
    allowNull:true
  }
},
{
  sequelize:seqlzConnexion,
  
}
)