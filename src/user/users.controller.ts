import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { CommentService } from "src/comment/comments.service";

import { CreateUserDto } from "./dtos/createUserDto";
import { UpdateUserDto } from "./dtos/updateUserDtop";
import { UserService } from "./users.service";

@Controller('user')
export class UserController{
  constructor(private readonly userService: UserService, private readonly commentService: CommentService) { }

  @Get('all')
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Get(':id/comment')
  getUserComment(@Param('id') id: number) {
    return this.commentService.findUserComment(id);
  }

  @Post()
  create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    this.userService.update(id, updateUserDto);
  }
}