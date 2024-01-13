import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async createPost(data): Promise<Post> {
    return await this.postRepository.save(data);
  }

  async findAll() {
    return await this.postRepository.find({
      relations: {
        user: true,
      },
    });
  }

  //   async createUser(data): Promise<User> {
  //     return await this.userRepository.save(data);
  //   }
  // Add other CRUD operations as needed
}
