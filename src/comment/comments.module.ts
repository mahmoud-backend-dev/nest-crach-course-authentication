import { Module } from "@nestjs/common";
import { CommentController } from "./comments.controller";

@Module({
  controllers: [CommentController],
})
export class CommentModule{}