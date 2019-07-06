import isNullOrEmpty from 'utils/isNullOrEmpty';

const NAMESPACE_DIVIDER = '/';
// const SUCCESS = 'SUCCESS';
// const FAIL = 'FAIL';

function actionTypeCreator(types, namespace) {
  const hasPrefix = isNullOrEmpty(namespace);

  return types.reduce((map, type) => {
    const baseTypeName = hasPrefix
      ? type
      : `${namespace}${NAMESPACE_DIVIDER}${type}`;

    return {
      ...map,
      [type]: baseTypeName,
      //   [type]: async
      //     ? {
      //         INDEX: baseTypeName,
      //         [SUCCESS]: `${baseTypeName}_${SUCCESS}`,
      //         [FAIL]: `${baseTypeName}_${FAIL}`,
      //       }
      //     : baseTypeName,
    };
  }, {});
}

export default actionTypeCreator;
