import { Test, TestingModule } from '@nestjs/testing';
import { AesOfbService } from './aes-ofb.service';

describe('AesOfbService', () => {
  let service: AesOfbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AesOfbService],
    }).compile();

    service = module.get<AesOfbService>(AesOfbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
