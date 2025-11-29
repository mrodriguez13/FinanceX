import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import * as argon2 from 'argon2';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepository) {}

  async create(dto: CreateUserDto) {
    const user = {
      id: randomUUID(),
      email: dto.email,
      passwordHash: await argon2.hash(dto.password),
      fullName: dto.fullName,
      role: 'user',
    };
    return this.repo.create(user);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }

  update(id: string, dto: UpdateUserDto) {
    return this.repo.update(id, dto);
  }

  remove(id: string) {
    return this.repo.remove(id);
  }
}
