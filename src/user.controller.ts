import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { userDto } from './user.dto';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  add(@Body() body: userDto) {
    return this.userService.createUser({
      username: body.username,
    });
  }

  // Add other routes as needed
}
