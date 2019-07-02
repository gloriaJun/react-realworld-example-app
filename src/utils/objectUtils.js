// type checking
function isString(obj) {
  return typeof obj === 'string';
}

// null or empty checking
function isNullOrEmpty(obj) {
  return !obj;
}

export { isString, isNullOrEmpty };
