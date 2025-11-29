import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  name!: string;

  @IsString()
  type!: string;

  @IsString()
  currency!: string;
}
