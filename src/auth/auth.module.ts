import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TwilioModule } from '../twilio/twilio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneOtp } from './auth.entity';
@Module({
  imports: [TypeOrmModule.forFeature([PhoneOtp]), TwilioModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
