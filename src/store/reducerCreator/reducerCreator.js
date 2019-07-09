import hasKey from 'utils/hasKey';

// https://redux.js.org/recipes/reducing-boilerplate#generating-reducers
function reducerCreator(initialState, handlers) {
  return (state = initialState, action = {}) =>
    hasKey(handlers, action.type)
      ? handlers[action.type](state, action, initialState)
      : state;
}

export default reducerCreator;
