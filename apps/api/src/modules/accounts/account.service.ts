import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly repo: AccountRepository) {}

  create(userId: string, dto: CreateAccountDto) {
    return this.repo.create({
      id: randomUUID(),
      userId,
      name: dto.name,
      type: dto.type,
      currency: dto.currency,
      balance: '0',
    });
  }

  findAll(userId: string) {
    return this.repo.findAllByUser(userId);
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }

  update(id: string, dto: UpdateAccountDto) {
    return this.repo.update(id, dto);
  }

  remove(id: string) {
    return this.repo.remove(id);
  }
}
