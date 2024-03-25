import { Module } from '@nestjs/common';
import { UsersController } from './controller';
import { UsersService } from './service';
import { User } from './model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
