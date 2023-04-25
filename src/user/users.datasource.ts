import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersDataSource {
  private connection: Connection;

  async connect(): Promise<void> {
    this.connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'expense',
      entities: [User],
      synchronize: true,
    });
  }
}
