import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('create')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  get() {
    return this.userService.getUsers();
  }
}
