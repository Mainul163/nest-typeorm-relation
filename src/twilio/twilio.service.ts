import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class TwilioService {
  private client: Twilio.Twilio;

  constructor() {
    const TWILIO_SID = 'AC1204c111277035f7fdf14a3da7c01da0';
    const TWILIO_AUTH_TOKEN = '8e6b3f59bd1682749d4714a925acbb3c';

    this.client = Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);
  }

  async sendOTP(
    phoneNumber: string,
    otp: string,
    retries: number = 3,
  ): Promise<void> {
    while (retries > 0) {
      try {
        await this.client.messages.create({
          body: `Your OTP is: ${otp}`,
          from: '+14083380771',
          to: phoneNumber,
        });
        return; // Successfully sent OTP, exit the loop
      } catch (error) {
        console.error('Twilio API request failed:', error);
        retries--;
        if (retries === 0) {
          throw error; // If retries exhausted, throw the error
        }
        // Wait for a moment before retrying
        await new Promise((resolve) => setTimeout(resolve, 18000));
      }
    }
  }
}
