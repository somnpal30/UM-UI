import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthController } from './authentication/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController,AuthController],
  providers: [AppService, UserService],
})
export class AppModule {}
