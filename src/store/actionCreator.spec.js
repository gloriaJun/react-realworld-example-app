import { createActionTypes } from 'store/actionCreator';

describe('[actionCreator] createActionTyper', () => {
  it('create the type without namespace', () => {
    // given
    const types = ['ADD', 'DELETE'];
    // when
    const result = createActionTypes(types);
    // then
    expect(Object.keys(result).length).toBe(2);
    expect(result).toMatchObject({
      ADD: 'ADD',
      DELETE: 'DELETE',
    });
  });

  it('create the type with prefix', () => {
    // given
    const types = ['ADD', 'DELETE'];
    // when
    const result = createActionTypes(types, 'USER');
    // then
    expect(Object.keys(result).length).toBe(2);
    expect(result).toMatchObject({
      ADD: 'USER_ADD',
      DELETE: 'USER_DELETE',
    });
  });
});
