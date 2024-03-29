import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Course } from 'src/course/course.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @ManyToMany(() => Course, (course) => course.students)
  @JoinTable()
  courses: Course[];
}
