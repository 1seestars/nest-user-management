import { Injectable } from '@nestjs/common';
import { User } from './model';
import { CreateUserDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async getUsers() {
    return await this.userRepository.findAll();
  }
}
