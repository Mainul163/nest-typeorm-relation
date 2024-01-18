import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './auth-credentials.dto';
import { PhoneOtp } from './auth.entity';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/send-otp')
  sendOTP(@Body() data: AuthCredentialsDto): Promise<PhoneOtp> {
    return this.authService.sendOTP(data.phoneNumber);
  }

  @Post('/verify-otp')
  verifyOTP(@Body() data: AuthCredentialsDto) {
    return this.authService.verifyOTP(data.phoneNumber, data.otp);
  }
}
