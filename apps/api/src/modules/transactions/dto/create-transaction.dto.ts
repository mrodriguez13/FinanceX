import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  accountId!: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsNotEmpty()
  description!: string;

  @IsNumber()
  amount!: number;

  @IsString()
  currency!: string;

  @IsDateString()
  date!: string;
}
