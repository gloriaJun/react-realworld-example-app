import identity from 'utils/identity';

function actionCreator(type, payloadCreator = identity) {
  return (...args) => ({
    type,
    payload: payloadCreator(...args),
  });
}

export default actionCreator;
