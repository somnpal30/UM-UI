import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

import * as BODY_Response from './component.json';
import * as HEADER_Response from './header.json';
import * as VIEW_Response from './view.json';
import * as SFM_Response from './response1.json';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/components")
  getComponent(@Res() res: Response):any{
    console.log("getting component .........." + Date.now())
    res.status(HttpStatus.OK).json(BODY_Response);
  }

  @Get("/header")
  getHeader(@Res() res: Response):any{
    console.log("getting header .........." + Date.now())
    res.status(HttpStatus.OK).json(HEADER_Response);
  }

  @Get("/view-json")
  viewComponent(@Res() res: Response):any{
    console.log("getting component .........." + Date.now())
    res.status(HttpStatus.OK).json(VIEW_Response);
  }

  @Get("/sfm-response")
  sftRespoonse(@Res() res: Response):any{
    console.log("getting component .........." + Date.now())
    res.status(HttpStatus.OK).json(SFM_Response);
  }
}
