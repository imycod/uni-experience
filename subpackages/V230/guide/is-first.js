
import {
  setStorage,
  getStorage,
} from "../static/useStorageSync.js"

// 本地存储的租户信息名称
const KEY = 'IS_FIRST';


/**
 * 本地缓存isFirst
 */
const setIsFirst = function (key = KEY, value = 'true') {
  setStorage(key, value)
}

/**
 * 获取本地缓存的isFirst
 */
const getIsFirst = function (key = KEY) {
  getStorage(key)
}

export {
  KEY,
  setIsFirst,
  getIsFirst
}
