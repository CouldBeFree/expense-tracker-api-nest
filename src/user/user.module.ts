import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersDataSource } from './users.datasource';

@Module({
  controllers: [UserController],
  providers: [UserService, UsersDataSource],
})
export class UserModule {}
