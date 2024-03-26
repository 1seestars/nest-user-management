import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 200, type: User })
  @Post('create')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  get() {
    return this.userService.getUsers();
  }
}
