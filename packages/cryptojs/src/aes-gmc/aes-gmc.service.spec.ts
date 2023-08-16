import { Test, TestingModule } from '@nestjs/testing';
import { AesGmcService } from './aes-gmc.service';

describe('AesGmcService', () => {
  let service: AesGmcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AesGmcService],
    }).compile();

    service = module.get<AesGmcService>(AesGmcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
