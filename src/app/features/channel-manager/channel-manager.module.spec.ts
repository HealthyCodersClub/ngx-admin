import { ChannelManagerModule } from './channel-manager.module';

describe('ChannelManagerModule', () => {
  let channelManagerModule: ChannelManagerModule;

  beforeEach(() => {
    channelManagerModule = new ChannelManagerModule();
  });

  it('should create an instance', () => {
    expect(channelManagerModule).toBeTruthy();
  });
});
