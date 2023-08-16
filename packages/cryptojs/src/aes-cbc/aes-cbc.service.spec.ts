import { Test, TestingModule } from '@nestjs/testing';
import { AesCbcService } from './aes-cbc.service';

describe('AesCbcService', () => {
  let service: AesCbcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AesCbcService],
    }).compile();

    service = module.get<AesCbcService>(AesCbcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
