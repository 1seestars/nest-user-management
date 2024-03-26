import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { RoleCreationAttributes } from './types';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/model';
import { UserRoles } from './user-roles/model';

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Role name' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({
    example: 'Allows to serf basic routes',
    description: 'Describes the role functionality',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
