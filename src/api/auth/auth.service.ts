import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/api/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}
    
    async logIn(email: string, pass: string) {
        const user = await this.userService.findBy({email: email});

        // https://stackoverflow.com/questions/23015043/verify-password-hash-in-nodejs-which-was-generated-in-php
        const userPasswordHash = user.password.replace(/^\$2y(.+)$/i, '$2a$1');
        
        if (! await bcrypt.compare('password', userPasswordHash)) {
          throw new UnauthorizedException();
        }

        const payload = { username: user.email, sub: user.id};

        return {
          token: await this.jwtService.signAsync(payload),
        };
      }
}
