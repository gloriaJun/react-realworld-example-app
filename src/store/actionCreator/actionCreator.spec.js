import actionCreator from './actionCreator';

describe('actionCreator', () => {
  it('should be return action by uses identity function ', () => {
    // given
    const type = 'ADD';
    // whet
    const action = actionCreator(type);
    // given
    expect(action(1)).toMatchObject({
      type,
      payload: 1,
    });
  });

  it('should be return action by uses payloadCreator', () => {
    // given
    const type = 'ADD';
    // whet
    const action = actionCreator(type, val => 3 + val);
    // given
    expect(action(6)).toMatchObject({
      type,
      payload: 9,
    });
  });
});
