import { isNullOrEmpty } from 'utils/objectUtils';

const SUCCESS = 'SUCCESS';
const FAIL = 'FAIL';

function createActionType(types, prefix, async = false) {
  const hasPrefix = isNullOrEmpty(prefix);

  return types.reduce((map, type) => {
    const baseTypeName = hasPrefix ? type : `${prefix}_${type}`;

    return {
      ...map,
      [type]: async
        ? {
            INDEX: baseTypeName,
            [SUCCESS]: `${baseTypeName}_${SUCCESS}`,
            [FAIL]: `${baseTypeName}_${FAIL}`,
          }
        : baseTypeName,
    };
  }, {});
}

const createActionTypes = (types, prefix) => createActionType(types, prefix);
const createAsyncActionTypes = (types, prefix) =>
  createActionType(types, prefix, true);

function createActions(types) {
  return types;
}

export { createActionTypes, createAsyncActionTypes, createActions };
