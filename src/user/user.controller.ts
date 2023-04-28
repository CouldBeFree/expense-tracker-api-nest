import { Post, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async createUser(@Body() user: UserEntity): Promise<any> {
    return this.userService.createUser(user);
  }
}
