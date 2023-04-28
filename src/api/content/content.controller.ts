import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentDto } from './dto/content.dto';
  
  @Controller('api/contents')
  export class ContentController {
    constructor(private contentService: ContentService) {}
  
    @Get()
    getAll() {
      return this.contentService.get();
    }
  
    @Get('/:contentId')
    find(@Param('contentId', ParseIntPipe) contentId: number) {
      return this.contentService.find(contentId);
    }
  
    @Post()
    store(@Body() contentDto: ContentDto) {
      console.log(contentDto);
      return this.contentService.create(contentDto);
    }
  
    @Put('/:contentId')
    update(
      @Body() body: ContentDto,
      @Param('contentId', ParseIntPipe) contentId: number,
    ) {
      return this.contentService.update(body, contentId);
    }
  
    @Delete('/:contentId')
    delete(@Param('contentId', ParseIntPipe) contentId: number) {
      return this.contentService.delete(contentId);
    }
  }
  