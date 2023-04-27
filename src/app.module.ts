import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './orm-config';

@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), ContentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
