import { Body, Controller, Post, Request, UseGuards, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "src/user/dtos/createUserDto";
import { UserService } from "src/user/users.service";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";


@Controller('auth')
export class AuthController{
  
  constructor(private authService: AuthService, private userService:UserService) { };

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  };

  @Post('register')
  async register( @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))  createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
}