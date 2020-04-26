/**
 * 深拷贝&浅拷贝
 * 浅拷贝：对引用的拷贝，一般只能拷贝到一层
 * 深拷贝：循环无限层的拷贝
 */
// 浅拷贝方法
// 对象
let obj = {};
Object.assign({}, obj, { ...obj });
// 数组
// concat、slice ...

/**
 * 深拷贝
 */
function deepClone(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj === obj[key]) {
      continue;
    }
    if (typeof obj === 'object') {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
}