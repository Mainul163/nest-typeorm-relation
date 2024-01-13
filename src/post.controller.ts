import { Controller, Get, Post, Body } from '@nestjs/common';

import { PostService } from './post.service';

import { postDto } from './post.dto';
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Post()
  add(@Body() body: postDto) {
    return this.postService.createPost({
      title: body.title,
      userId: body.userId,
    });
  }

  // Add other routes as needed
}
