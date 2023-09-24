import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comments.module';
import { UserModule } from './user/users.module';
import config from 'ormconfig';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, CommentModule, AuthModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
