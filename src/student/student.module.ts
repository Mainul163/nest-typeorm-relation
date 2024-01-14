import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Student } from './student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]), // Import the Student entity into the module
  ],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
