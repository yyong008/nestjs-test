import { Test, TestingModule } from '@nestjs/testing';
import { AesCfbService } from './aes-cfb.service';

describe('AesCfbService', () => {
  let service: AesCfbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AesCfbService],
    }).compile();

    service = module.get<AesCfbService>(AesCfbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
