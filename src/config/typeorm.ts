import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  username: 'postgres',
  password: '1234',
  database: 'gbi-gubae',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  SnakeNamingStrategyy: new SnakeNamingStrategy(),
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
