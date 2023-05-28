import { Controller, Get } from '@nestjs/common';

import { TestService } from './test.service';
@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getData() {
    return this.testService.getData();
  }
}



  

