import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  create(user: Partial<User>) {
    return this.repo.save(user);
  }

  update(id: string, data: Partial<User>) {
    return this.repo.update({ id }, data);
  }

  remove(id: string) {
    return this.repo.softDelete({ id });
  }
}
