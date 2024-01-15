import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  @IsPhoneNumber(null, { message: 'Invalid phone number' })
  phoneNumber: string;

  @IsNotEmpty()
  otp: string;
}
