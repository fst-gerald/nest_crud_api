import {
    Controller,
    Get,
    Req,
} from '@nestjs/common';
import { UserService } from './user.service';
  
  @Controller('api/users')
  export class UserController {
    constructor(private userService: UserService) {}
  
    @Get('/user')
    find(@Req() request: any) {
      return this.userService.findBy({id: request.user.id});
    }
  }
  