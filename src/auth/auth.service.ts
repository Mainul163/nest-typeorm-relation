import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TwilioService } from '../twilio/twilio.service';
import { PhoneOtp } from './auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(PhoneOtp)
    private readonly PhoneRepository: Repository<PhoneOtp>,
    private readonly twilioService: TwilioService,
    private jwtService: JwtService,
  ) {}

  async sendOTP(phoneNumber: string): Promise<PhoneOtp> {
    const otp = this.generateOTP();
    // Store the OTP in a database or cache for verification
    const phoneOtp = { phoneNumber: phoneNumber, otp: otp };

    this.twilioService.sendOTP(phoneNumber, otp);
    return await this.PhoneRepository.save(phoneOtp);
  }

  async verifyOTP(phoneNumber: string, otp: string) {
    const otpNumber = await this.PhoneRepository.findOne({
      where: { otp },
    });

    if (otpNumber?.otp !== otp) {
      console.log(otpNumber?.otp, 'otp', otp);
      throw new UnauthorizedException();
    }
    const payload = { sub: otpNumber.id, phoneNumber: otpNumber.phoneNumber };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
    // Retrieve stored OTP from the database or cache
    const storedOTP = 'getStoredOTP'; // Replace with your actual implementation

    if (otp === storedOTP) {
      // OTP is valid, generate and return an access token
      // const accessToken = 'generateAccessToken'; Replace with your actual implementation
      // return {accessToken};
      // return;
    } else {
      throw new UnauthorizedException('Invalid OTP');
    }
  }

  private generateOTP(): string {
    // Implement your OTP generation logic (e.g., random 6-digit number)
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
