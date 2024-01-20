import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  async saveFile(file: Express.Multer.File): Promise<File> {
    const newFile = this.fileRepository.create({
      filename: file.filename,
      //   path: file.path,
      // Add other necessary properties
    });
    console.log(newFile);
    return await this.fileRepository.save(newFile);
  }
}
