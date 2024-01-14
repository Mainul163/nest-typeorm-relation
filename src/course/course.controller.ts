import { Controller, Post, Body, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.entity';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  findAll() {
    return this.courseService.findAll();
  }
  @Post()
  async createCourse(@Body() courseData: Partial<Course>): Promise<Course> {
    return this.courseService.createCourse(courseData);
  }
}
