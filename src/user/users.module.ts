import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from 'src/comment/comments.service';
import { User } from 'src/entities/user.entity';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers:[UserController],
  providers: [UserService, CommentService],
  exports:[UserService]
})
export class UserModule{}