import app from '../../src/app';

describe('\'professors\' service', () => {
  it('registered the service', () => {
    const service = app.service('professors');
    expect(service).toBeTruthy();
  });
});
