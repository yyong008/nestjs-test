import { Test, TestingModule } from '@nestjs/testing';
import { AesCcmController } from './aes-ccm.controller';
import { AesCcmService } from './aes-ccm.service';

describe('AesCcmController', () => {
  let controller: AesCcmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesCcmController],
      providers: [AesCcmService],
    }).compile();

    controller = module.get<AesCcmController>(AesCcmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
