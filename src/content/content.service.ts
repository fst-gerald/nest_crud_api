import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { Not, Repository } from 'typeorm';
import { ContentDto } from './dto/content.dto';

@Injectable()
export class ContentService {
  
  constructor(@InjectRepository(Content) private contentRepository: Repository<Content>) { }

  async get() {
    return await this.contentRepository.find();
  }

  async find(contentId: number) {
    return await this.contentRepository.findOneBy({id: contentId});
  }
  
  async create(contentDto: ContentDto) {
    return await this.contentRepository.save(contentDto);
  }

  async update(contentDto: ContentDto, contentId: number) {
    return await this.contentRepository.update(contentId, contentDto);
  }

  async delete(contentId: number) {
    return await this.contentRepository.softDelete({id: contentId});
  }

  async findOneOrFail(content: Content) {
    return await this.contentRepository.findOneOrFail({
      where: {
        id: Not(content.id),
        title: content.title
      }
    });
  }
}
