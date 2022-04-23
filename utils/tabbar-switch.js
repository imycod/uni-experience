/**
 * APP内tabbar页面路径跳转及
 * @description 0 - 首页 / 1 - 学习（学生）/教学（老师） / 2 - 消息 / 3 - 我的 / 4 - 公开课-推荐 / 5 - 公开课-分类 / 6 - 就业-职位 / 7- 就业-名企 / 8 - 就业我的 / 9 - 线下活动
 * @params {String} service - 服务模块名称【base - 基础模块 / limitBase - 被限制的基础模块（缺省学习模块） / job - 就业模块 / openCourse - 公开课模块】
 * @params {Array} - limits - 缺省限制的tabbar
 */
import { setUnreadMessage, isAbnormal } from './tabbar-hook'
const UPDATE_MESSAGE = ['ABNORMAL', 'HOME', 'LEARN', 'MESSAGE', 'USER'],
      ABNORMAL_CHECK_TABBAR = ['MESSAGE', 'USER'],
      ABNORMAL_TABBAR = ['ABNORMAL', 'MESSAGE', 'USER'],
      ABNORMAL_TABBAR_HIDE = ['HOME', 'LEARN', 'JOB_ENTERPRISE', 'JOB_POSITION', 'JOB_USER', 'OPEN_COURSE_RECOMMEND', 'OPEN_COURSE_SORT', 'OFF_ACTIVITY', 'MY_ACTIVITY', 'LOGIN'],
      NORMAL_TABBAR = ['HOME', 'LEARN', 'MESSAGE', 'USER'],
      NORMAL_TABBAR_HIDE = ['ABNORMAL', 'OPEN_COURSE_RECOMMEND', 'OPEN_COURSE_SORT', 'JOB_POSITION', 'JOB_ENTERPRISE', 'JOB_USER','OFF_ACTIVITY', 'MY_ACTIVITY', 'LOGIN'],
      JOB_TABBAR = ['JOB_POSITION', 'JOB_ENTERPRISE', 'JOB_USER'],
      JOB_TABBAR_HIDE = ['ABNORMAL', 'HOME', 'LEARN', 'MESSAGE', 'USER', 'OPEN_COURSE_RECOMMEND', 'OPEN_COURSE_SORT', 'OFF_ACTIVITY', 'MY_ACTIVITY', 'LOGIN'],
      OPEN_COURSE_TABBAR = ['OPEN_COURSE_RECOMMEND', 'OPEN_COURSE_SORT'],
      OPEN_COURSE_TABBAR_HIDE = ['ABNORMAL', 'HOME', 'LEARN', 'MESSAGE', 'USER', 'JOB_POSITION', 'JOB_ENTERPRISE', 'JOB_USER', 'OFF_ACTIVITY','OFF_ACTIVITY', 'LOGIN'],
      ACTIVITY_TABBAR = ['OFF_ACTIVITY', 'MY_ACTIVITY'],
      ACTIVITY_TABBAR_HIDE = ['ABNORMAL', 'HOME', 'LEARN', 'MESSAGE', 'USER', 'JOB_ENTERPRISE', 'JOB_POSITION', 'JOB_USER', 'OPEN_COURSE_RECOMMEND', 'OPEN_COURSE_SORT', 'LOGIN'];
const TAB_BAR_INFO = {
  ABNORMAL: {
    index: 0,
    path: '/pages/home-230/abnormal',
    statusBg: 'dark',
    show: ABNORMAL_TABBAR,
    hide: ABNORMAL_TABBAR_HIDE
  },
  HOME: {
    index: 1,
    path: '/pages/home-230/index',
    statusBg: 'light',
    show: NORMAL_TABBAR,
    hide: NORMAL_TABBAR_HIDE
  },
  LEARN: {
    index: 2,
    path: '/pages/learn-220/index',
    statusBg: 'dark',
    show: NORMAL_TABBAR,
    hide: NORMAL_TABBAR_HIDE
  },
  // MESSAGE: { // V220
  //   index: 3,
  //   path: '/pages/message-220/index',
  //   statusBg: 'dark',
  //   show: NORMAL_TABBAR,
  //   hide:NORMAL_TABBAR_HIDE
  // },
  MESSAGE: {
    index: 3,
    path: '/pages/message-230/index',
    statusBg: 'dark',
    show: NORMAL_TABBAR,
    hide:NORMAL_TABBAR_HIDE
  },
  USER: {
    index: 4,
    path: '/pages/user-220/index',
    statusBg: 'dark',
    show: NORMAL_TABBAR,
    hide: NORMAL_TABBAR_HIDE
  },
  OPEN_COURSE_RECOMMEND: {
    index: 5,
    path: '/pages/open-course-service-220/recommend',
    statusBg: 'dark',
    show: OPEN_COURSE_TABBAR,
    hide: OPEN_COURSE_TABBAR_HIDE
  },
  OPEN_COURSE_SORT: {
    index: 6,
    path: '/pages/open-course-service-220/sort',
    statusBg: 'dark',
    show: OPEN_COURSE_TABBAR,
    hide: OPEN_COURSE_TABBAR_HIDE
  },
  JOB_POSITION: {
    index: 7,
    path: '/pages/job-service-220/job-position',
    statusBg: 'dark',
    show: JOB_TABBAR,
    hide: JOB_TABBAR_HIDE
  },
  JOB_ENTERPRISE: {
    index: 8,
    path: '/pages/job-service-220/enterprise',
    statusBg: 'dark',
    show: JOB_TABBAR,
    hide: JOB_TABBAR_HIDE
  },
  JOB_USER: {
    index: 9,
    path: '/pages/job-service-220/job-user',
    statusBg: 'dark',
    show: JOB_TABBAR,
    hide: JOB_TABBAR_HIDE
  },
  OFF_ACTIVITY: {
    index: 10,
    path: '/pages/offline-activity/index',
    statusBg: 'dark',
    show: ACTIVITY_TABBAR,
    hide: ACTIVITY_TABBAR_HIDE
  },
  MY_ACTIVITY: {
    index: 11,
    path: '/pages/offline-activity/my',
    statusBg: 'dark',
    show: ACTIVITY_TABBAR,
    hide: ACTIVITY_TABBAR_HIDE
  },
  LOGIN: {
    index: 12,
    path: '/pages/login/index',
    statusBg: 'dark',
    show: ['LOGIN'],
    hide: [...NORMAL_TABBAR, ...JOB_TABBAR, ...OPEN_COURSE_TABBAR, ...ACTIVITY_TABBAR, 'ABNORMAL']
  }
}
const HIDE_TABBAR = ['LOGIN'];

export default (name, limits = []) => {
  HIDE_TABBAR.includes(name) ? uni.hideTabBar() : uni.showTabBar();
  if (isAbnormal() && name === 'HOME') name = 'ABNORMAL';
  const hideTabbar = TAB_BAR_INFO[name].hide.concat(limits);
  uni.switchTab({ url: TAB_BAR_INFO[name].path });
  if (UPDATE_MESSAGE.includes(name)) setUnreadMessage();
  // plus.navigator.setStatusBarStyle(TAB_BAR_INFO[name].statusBg);
  TAB_BAR_INFO[name].show.forEach(item => {
    uni.setTabBarItem({
      index: TAB_BAR_INFO[item].index,
      visible: true
    })
  })
  hideTabbar.forEach(item => {
    uni.setTabBarItem({
      index: TAB_BAR_INFO[item].index,
      visible: false
    })
  })
}
