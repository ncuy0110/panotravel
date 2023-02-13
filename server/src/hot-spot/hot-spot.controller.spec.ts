import { Test, TestingModule } from '@nestjs/testing';
import { HotSpotController } from './hot-spot.controller';
import { HotSpotService } from './hot-spot.service';

describe('HotSpotController', () => {
  let controller: HotSpotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotSpotController],
      providers: [HotSpotService],
    }).compile();

    controller = module.get<HotSpotController>(HotSpotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
