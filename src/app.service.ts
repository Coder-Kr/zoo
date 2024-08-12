import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDetails(): string {
    return 'Zoo website detail!';
  }
}
