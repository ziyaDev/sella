
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getData(): { message: string } {
    return { message: 'Hello API From test.service work ?' };
  }
}
