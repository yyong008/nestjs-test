import { Test, TestingModule } from '@nestjs/testing';
import { AesGmcController } from './aes-gmc.controller';
import { AesGmcService } from './aes-gmc.service';

describe('AesGmcController', () => {
  let controller: AesGmcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AesGmcController],
      providers: [AesGmcService],
    }).compile();

    controller = module.get<AesGmcController>(AesGmcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
