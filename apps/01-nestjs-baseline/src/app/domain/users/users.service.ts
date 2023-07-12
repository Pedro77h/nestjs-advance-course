import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: Repository<UserEntity>) {}

  async fetchUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
