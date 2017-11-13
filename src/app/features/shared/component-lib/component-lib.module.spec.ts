import { ComponentLibModule } from './component-lib.module';

describe('ComponentLibModule', () => {
  let componentLibModule: ComponentLibModule;

  beforeEach(() => {
    componentLibModule = new ComponentLibModule();
  });

  it('should create an instance', () => {
    expect(componentLibModule).toBeTruthy();
  });
});
