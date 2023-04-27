import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export default {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'sail',
    password: 'password',
    database: 'sanctum_crud_api',
    entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
    synchronize: false
} as TypeOrmModuleOptions;