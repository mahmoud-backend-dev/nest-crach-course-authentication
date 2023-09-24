import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentService{
  findUserComment(userId: number) {
    return 'this comment belongs to user'
  }
}