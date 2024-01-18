import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TwilioModule } from '../twilio/twilio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneOtp } from './auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  imports: [
    TypeOrmModule.forFeature([PhoneOtp]),
    TwilioModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
