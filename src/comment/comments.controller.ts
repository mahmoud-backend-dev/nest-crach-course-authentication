import { Controller, Get } from "@nestjs/common";

@Controller('comment')
export class CommentController{
  @Get()
  find() {
    return 'sdasda' 
  }
}