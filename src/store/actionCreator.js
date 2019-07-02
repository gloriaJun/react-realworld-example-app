import { isNullOrEmpty } from 'utils/objectUtils';

function createActionTypes(types, prefix) {
  return types.reduce((map, type) => {
    return {
      ...map,
      [type]: isNullOrEmpty(prefix) ? type : `${prefix}_${type}`,
    };
  }, {});
}

function createActions(types) {
  return types;
}

export { createActionTypes, createActions };
