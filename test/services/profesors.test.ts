import app from '../../src/app';

describe('\'profesors\' service', () => {
  it('registered the service', () => {
    const service = app.service('profesors');
    expect(service).toBeTruthy();
  });
});
