import { Test, TestingModule } from '@nestjs/testing';
import { AesCtrService } from './aes-ctr.service';

describe('AesCtrService', () => {
  let service: AesCtrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AesCtrService],
    }).compile();

    service = module.get<AesCtrService>(AesCtrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
