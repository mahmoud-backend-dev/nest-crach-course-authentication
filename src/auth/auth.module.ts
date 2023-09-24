import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UserModule } from "src/user/users.module";
// import { UserService } from "src/user/users.service";
// import { UserModule } from "src/user/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./Strategies/local-strategy";


@Module({
  imports: [UserModule,JwtModule.register({
    secret: process.env.jwt_secret,
    signOptions: {
      expiresIn:'3600s'
    }
  }), TypeOrmModule.forFeature([User])],
  providers: [AuthService,LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule{}