import { Test, TestingModule } from '@nestjs/testing';
import { AesCcmService } from './aes-ccm.service';

describe('AesCcmService', () => {
  let service: AesCcmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AesCcmService],
    }).compile();

    service = module.get<AesCcmService>(AesCcmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
