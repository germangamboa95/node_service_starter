import { Table, Column, Model, HasMany, DataType } from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column(DataType.TEXT)
  name: string;
}
