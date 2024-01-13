import { IsString } from 'class-validator';

export class postDto {
  @IsString()
  title: string;
  @IsString()
  userId: string;
}
