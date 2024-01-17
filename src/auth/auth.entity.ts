import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PhoneOtp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: string;
  @Column()
  otp: string;
}
