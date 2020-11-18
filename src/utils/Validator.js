export default {
    minLength(value, length) {
      return value.length < length ?
        1 : 0
    },
    maxLength(value, length) {
      return value.length > length ?
        1 : 0
    },
    validChar(value) {
        //eslint-disable-next-line
      return !/^[0-9a-zA-Z\_]+$/.test(value) ?
        1 : 0
    },
    isNonEmpty(value) {
      return value === '' ?
        1 : 0
    }
  }