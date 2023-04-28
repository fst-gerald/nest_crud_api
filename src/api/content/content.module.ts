import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './content.entity';

@Module({
    controllers: [ContentController],
    providers: [ContentService],
    imports: [TypeOrmModule.forFeature([Content])],
})
export class ContentModule {}
