import { Test, TestingModule } from '@nestjs/testing';
import { AesEcbService } from './aes-ecb.service';

describe('AesEcbService', () => {
  let service: AesEcbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AesEcbService],
    }).compile();

    service = module.get<AesEcbService>(AesEcbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
