import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'expense',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
