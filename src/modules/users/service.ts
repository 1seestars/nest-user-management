import { Injectable } from '@nestjs/common';
import { User } from './model';
import { CreateUserDto } from './dto';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from '../roles/service';
import { Role } from '../roles/model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);

    return user;
  }

  async getUsers() {
    return await this.userRepository.findAll({
      include: [
        {
          model: Role,
          through: { attributes: [] },
        },
      ],
    });
  }
}
