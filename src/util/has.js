/**
 *  判断给定的对象上面是否有对应的值
 * @param  {Object} 原始给定的对象
 * @param  {String} 值链
 * @return {Boolean}
 *
 * @example
 * has({a: { b: null }}, ''a.b"); // false
 * has({a: { b: null }}, ''a"); // true
 */

 const has = (objectData, keyChain) => {
  if (Object.prototype.toString.call(objectData) !== '[object Object]' || typeof keyChain !== 'string') return false;

  let _objectData = objectData;
  const keys = keyChain.split('.');
  for (let i = 0; i < keys.length; i++) {
      const res = _objectData[keys[i]];
      if (!res) return false;
      if (i === keys.length - 1) return true;
      _objectData = res;
  }
};

export default has;
