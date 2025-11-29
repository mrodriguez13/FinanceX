import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountRepository {
  constructor(@InjectRepository(Account) private readonly repo: Repository<Account>) {}

  findAllByUser(userId: string) {
    return this.repo.find({ where: { userId } });
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  create(account: Partial<Account>) {
    return this.repo.save(account);
  }

  update(id: string, data: Partial<Account>) {
    return this.repo.update({ id }, data);
  }

  remove(id: string) {
    return this.repo.softDelete({ id });
  }
}
