
import { timeStamp } from 'console';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
// We don't recommend doing this. Read on for the new way of declaring Model typings.
@Table({
    timestamps:false,
    tableName:'todos'
})

export class Todos extends Model {
@Column({
    type:DataType.STRING,
    allowNull:true,
})
name!: string;

@Column({
    type:DataType.STRING,
    allowNull:true,
})
description!:string

}