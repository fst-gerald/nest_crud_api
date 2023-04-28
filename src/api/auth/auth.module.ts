import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: (60*60).toString() + 's' }, // 1 hour
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,
    // for global auth guard
  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },]
})
export class AuthModule {}
