import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './service';
import { CreateRoleDto } from './dto';

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Post('create')
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get(':value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
