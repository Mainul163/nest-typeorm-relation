import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TwilioService } from '../twilio/twilio.service';

@Injectable()
export class AuthService {
  constructor(private readonly twilioService: TwilioService) {}

  async sendOTP(phoneNumber: string): Promise<void> {
    const otp = this.generateOTP();
    // Store the OTP in a database or cache for verification
    await this.twilioService.sendOTP(phoneNumber, otp);
  }

  async verifyOTP(
    phoneNumber: string,
    otp: string,
  ): Promise<{ accessToken: string }> {
    // Retrieve stored OTP from the database or cache
    const storedOTP = 'getStoredOTP'; // Replace with your actual implementation

    if (otp === storedOTP) {
      // OTP is valid, generate and return an access token
      const accessToken = 'generateAccessToken'; // Replace with your actual implementation
      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid OTP');
    }
  }

  private generateOTP(): string {
    // Implement your OTP generation logic (e.g., random 6-digit number)
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
