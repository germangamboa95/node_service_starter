import {
  Table,
  Column,
  Model,
  DataType,
  DeletedAt,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

@Table({ tableName: "users" })
export class User extends Model<User> {
  @Column({
    primaryKey: true,
    type: DataType.UUIDV4,
  })
  id: string;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  password?: string;

  @Column({
    unique: true,
    type: DataType.STRING,
  })
  email: string;

  @DeletedAt
  deleted_at: Date;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
