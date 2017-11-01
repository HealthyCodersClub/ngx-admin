import { RevenueModule } from './revenue.module';

describe('RevenueModule', () => {
  let revenueModule: RevenueModule;

  beforeEach(() => {
    revenueModule = new RevenueModule();
  });

  it('should create an instance', () => {
    expect(revenueModule).toBeTruthy();
  });
});
