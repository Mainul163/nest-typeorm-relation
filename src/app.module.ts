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
import { AuthModule } from './auth/auth.module';
import { PhoneOtp } from './auth/auth.entity';
import { File } from './file/file.entity';
import { FileModule } from './file/file.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123@123',
      database: 'nest_database',
      entities: [User, Post, Student, Course, PhoneOtp, File],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads', // Set the destination folder for file uploads
    }),
    UserModule,
    PostModule,
    StudentModule,
    CourseModule,
    AuthModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
