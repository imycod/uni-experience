
const setStorage = function (key,value) {
  uni.setStorageSync(key,value);
}


const getStorage = function (key) {
  return uni.getStorageSync(key);
}

const removeStorage = function (key) {
  uni.removeStorageSync(key);
}

export {
  setStorage,
  getStorage,
  removeStorage
}
