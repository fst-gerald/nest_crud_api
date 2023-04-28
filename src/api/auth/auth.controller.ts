import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { Guest } from './decorators/guest.decorator';

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Guest()
    @Post('/token')
    login(@Body() loginDto: AuthLoginDto) {
      return this.authService.logIn(loginDto.email, loginDto.password);
    }
}
