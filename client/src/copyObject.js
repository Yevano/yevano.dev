function copyObject(obj) {
  var ret = { }

  for (let [key, value] of Object.entries(obj)) {
    if(typeof value === 'object') {
      ret[key] = copyObject(value);
    } else {
      ret[key] = value;
    }
  }

  return ret;
}

export default copyObject;