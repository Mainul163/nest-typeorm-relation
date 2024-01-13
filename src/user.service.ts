import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.userRepository.find({
      relations: {
        posts: true,
      },
    });
  }

  async createUser(data): Promise<User> {
    return await this.userRepository.save(data);
  }
  // Add other CRUD operations as needed
}
