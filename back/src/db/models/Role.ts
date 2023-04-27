import { type } from "os";
import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnection";

interface RoleAttribute {
  id?:number | null;
  roleName?: string | null;
  active?:boolean | null;
  createdAt?:Date;
  updatedAt?:Date;
}

export interface RoleInput extends Optional<RoleAttribute,'id'>{}
export  interface RoleOutpout extends Required<RoleAttribute>{}

class Role extends Model <RoleInput,RoleOutpout> implements RoleAttribute {
  public id? : number;
  public roleName?: string | null | undefined;
  public active?: boolean | null;
  public createdAt?: Date;
  public updatedAt?: Date;
}
 Role.init({
  id:{
    allowNull:false,
    autoIncrement:true,    
    primaryKey:true,
    type:DataTypes.BIGINT
  },
  roleName:{
    allowNull:true,
    type:DataTypes.STRING
  },
  active:{
    type:DataTypes.BOOLEAN,
    allowNull:true
  }
 },{
  timestamps:true,
  sequelize:connection,
  underscored:false
 })

 export default Role;