import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './file.entity';
import { FileService } from './file.service';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    // Import the Course entity into the module `TypeOrmModule`
    TypeOrmModule.forFeature([File]),
    MulterModule.register({
      dest: './uploads',
    }),
  ],

  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
