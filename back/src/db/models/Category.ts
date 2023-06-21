import { DataTypes, Optional ,Model} from "sequelize";
import seqlzConnexion from "../../config/dbConnect";



interface CategoryAttributes {
  id?:string;
  label:string | undefined;
  description?:string | null;

}

export interface  CategoryInput extends Optional <CategoryAttributes, "id">{};
export interface CategoryOutpout extends Required<CategoryAttributes>{};

class Category extends Model <CategoryInput, CategoryOutpout> implements CategoryAttributes {
  public id!: string | undefined;
  public label!: string | undefined;
  public description!: string | undefined;

}

Category.init({
  id:{
    type:DataTypes.BIGINT,
    primaryKey:true,
    autoIncrement:true,
  },
  label:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  }
},
{
  sequelize: seqlzConnexion,
  timestamps: true,
  underscored: false,
}
)

export default Category