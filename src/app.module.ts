import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';
import { Post } from './post.entity';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post.module';
import { Student } from './student/student.entity';
import { Course } from './course/course.entity';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123@123',
      database: 'nest_database',
      entities: [User, Post, Student, Course],
      synchronize: true,
    }),
    UserModule,
    PostModule,
    StudentModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
