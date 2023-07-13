import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dtos/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async fetchUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async createUser(body: CreateUserDto) {
    return this.userRepository.save(body);
  }
}
