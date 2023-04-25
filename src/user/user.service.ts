import { Injectable } from '@nestjs/common';
import { UsersDataSource } from './users.datasource';

@Injectable()
export class UserService {
  constructor(private readonly dataSource: UsersDataSource) {}
}
