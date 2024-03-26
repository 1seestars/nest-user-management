import { Module } from '@nestjs/common';
import { UsersController } from './controller';
import { UsersService } from './service';
import { User } from './model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../roles/model';
import { UserRoles } from '../roles/user-roles/model';
import { RolesModule } from '../roles/module';

@Module({
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
