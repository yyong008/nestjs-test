import { Test, TestingModule } from '@nestjs/testing';
import { AesCbcController } from './aes-cbc.controller';
import { AesCbcService } from './aes-cbc.service';

describe('AesCbcController', () => {
  let controller: AesCbcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesCbcController],
      providers: [AesCbcService],
    }).compile();

    controller = module.get<AesCbcController>(AesCbcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
