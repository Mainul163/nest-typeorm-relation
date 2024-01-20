import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { FileService } from './file.service';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    // Assuming FileService has a method to save file information into the database
    console.log('controller', file);
    return this.fileService.saveFile(file);
  }
}

//   @UseInterceptors(
//     FileInterceptor('file', {
//       storage: diskStorage({
//         destination: './uploads', // Specify your upload directory
//         filename: (req, file, callback) => {
//           const randomName = Array(32)
//             .fill(null)
//             .map(() => Math.round(Math.random() * 16).toString(16))
//             .join('');
//           return callback(
//             null,
//             `${randomName}${new Date().getTime()}${file.originalname}`,
//           );
//         },
//       }),
//     }),
//   )
