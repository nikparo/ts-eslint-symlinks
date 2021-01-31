import { symlinkedLib } from './symlinked-lib';

describe('symlinkedLib', () => {
  it('should work', () => {
    expect(symlinkedLib()).toEqual('symlinked-lib');
  });
});
