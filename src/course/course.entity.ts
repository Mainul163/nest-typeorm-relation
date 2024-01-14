import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { Student } from '../student/student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
