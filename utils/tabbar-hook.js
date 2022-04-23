/**
 * 系统底部导航的相关函数
 */
import api from '@/api/index.js'
import tabBarSwitch from './tabbar-switch.js'
import approvalStatus from '@/enmu/approval-status.js' // 审批状态
import memberStatus from '@/enmu/member-status.js' // 成员状态
import tenantStatus from '@/enmu/tenant-status.js' // 租户状态
const ABNORMAL_KEY = 'abnormalKey'
export const setUnreadMessage = () => {
  $one.uc.http.get(TAC.getNewsUnread, {}).then(res => {
    if (Number(res.data)) {
      uni.setTabBarBadge({ index: 3, text: res.data > 99 ? '99+' : res.data + '' })
    } else {
      uni.removeTabBarBadge({ index: 3 })
    }
  })
}

/**
 * 验证首页
 */
export const checkAppHome = (tenantInfo) => {
  if (Number(tenantInfo.expFlag) === 1 || (Number(tenantInfo.approvalStatus) === approvalStatus.PASS.value &&
      Number(tenantInfo.validFlag) === tenantStatus.CAN_USE.value &&
      Number(tenantInfo.userStatus) === memberStatus.CAN_USE.value)) {
    removeAbnormal();
    tabBarSwitch('HOME');
  } else {
    setAbnormal();
    tabBarSwitch('ABNORMAL');
  }
}

export const setAbnormal = () => {
  uni.setStorageSync(ABNORMAL_KEY, true);
}

export const removeAbnormal = () => {
  uni.removeStorageSync(ABNORMAL_KEY);
}

export const isAbnormal = () => {
  return uni.getStorageSync(ABNORMAL_KEY);
}
