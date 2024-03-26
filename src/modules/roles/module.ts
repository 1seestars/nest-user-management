import { Module } from '@nestjs/common';
import { RolesController } from './controller';
import { RolesService } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './model';
import { User } from '../users/model';
import { UserRoles } from './user-roles/model';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
