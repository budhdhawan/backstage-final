import { demoPlugin } from './plugin';

describe('demo', () => {
  it('should export plugin', () => {
    expect(demoPlugin).toBeDefined();
  });
});
