import { Test, TestingModule } from '@nestjs/testing';
import { HotSpotService } from './hot-spot.service';

describe('HotSpotService', () => {
  let service: HotSpotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotSpotService],
    }).compile();

    service = module.get<HotSpotService>(HotSpotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
