import { Optional, Model, DataTypes } from "sequelize";
import { ArticleAttributes } from "../../types";
import seqlzConnexion from "../../config/dbConnect";
import Category from "./Category";

export interface ArticleInput extends Optional<ArticleAttributes, "id"> {}
export interface ArticleOutput extends Required<ArticleAttributes> {}

class Article
  extends Model<ArticleInput, ArticleOutput>
  implements ArticleAttributes
{
  public id?: Number | undefined;
  public ArticleName?: string | null;
  public TVA?: number | undefined;
  public prix_HTTC?: number | null;
  public categori_id?: number | null;
}
Article.hasMany(Category, {
  foreignKey: "categori_id",
});
Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    ArticleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TVA: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prix_HTTC: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    categori_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: seqlzConnexion,
  }
);

export default Article;
