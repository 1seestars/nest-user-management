import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/module';
import { RolesModule } from './modules/roles/module';
import { ConfigModule } from '@nestjs/config';
import { User } from './modules/users/model';
import { Role } from './modules/roles/model';
import { configModuleOptions } from './configuration';
import { UserRoles } from './modules/roles/user-roles/model';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DBNAME,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
  ],
})
export class AppModule {}
