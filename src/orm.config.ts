import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'expense',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*.{js,ts}'],
};

const appDataSource = new DataSource(dataSourceOptions);

appDataSource.initialize();

export default appDataSource;
