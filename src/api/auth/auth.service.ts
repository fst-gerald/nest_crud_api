import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    
    async logIn(loginDto: AuthLoginDto) {
        const user = await this.userService.findBy({email: loginDto.email});
        // https://stackoverflow.com/questions/23015043/verify-password-hash-in-nodejs-which-was-generated-in-php
        const userPasswordHash = user.password.replace(/^\$2y(.+)$/i, '$2a$1');
        
        if (! await bcrypt.compare(loginDto.password, userPasswordHash)) {
          throw new UnauthorizedException();
        }

        const payload = { user: user };

        return await this.jwtService.signAsync(payload);
      }
}
