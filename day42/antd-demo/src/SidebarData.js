// 侧边栏：分组的menuItem组合
// 相当于配置文件

export const sidebarData = [
  {
    key: 'group0',
    title: {
      icon: "dashboard",
      text: "数据分析"
    },
    children: [
      {
        key: '1',
        text: '数据监控',
        path: '/dashboard/monitor'
      },
      {
        key: '2',
        text: '数据分析',
        path: '/dashboard/analyze'
      },
    ]
  },
  {
    key: 'group1',
    title: {
      icon: 'play-circle',
      text: '音频管理'
    },
    children: [
      {
        key: '6',
        text: '声兮列表',
        path: '/voice/sxlist'
      },
      {
        key: '7',
        text: '回声列表',
        path: '/voice/calllist'
      }
    ]
  },
  {
    key: 'group2',
    title: {
      icon: 'schedule',
      text: '活动中心'
    },
    children: [
      {
        key: '11',
        text: '活动列表',
        path: '/active/list'
      },
      {
        key: '12',
        text: '新建活动',
        path: '/active/add'
      }
    ]
  },
  {
    key: 'group3',
    title: {
      icon: 'apple-o',
      text: 'APP管理'
    },
    children: [
      {
        key: '16',
        text: '移动交互',
        path: '/appmanage/interaction'
      },
      {
        key: '17',
        text: '回声列表',
        path: '/test'
      },
      {
        key: '18',
        text: '用户列表',
        path: '/user/list'
      }
    ]
  },
  {
    key: 'group4',
    title: {
      icon: 'safety',
      text: '安全中心'
    },
    children: [
      {
        key: '21',
        text: '举报处理',
        path: '/safety/report'
      },
      {
        key: '22',
        text: '广播中心',
        path: '/safety/broadcast'
      }
    ]
  },
  {
    key: 'group5',
    title: {
      icon: 'user',
      text: '系统设置'
    },
    children: [
      {
        key: '26',
        text: '个人设置',
        path: '/user/setting'
      },
      {
        key: '27',
        text: '用户列表',
        path: '/user/list'
      }
    ]
  },
  {
    key: 'group6',
    title: {
      icon: 'info-circle',
      text: '平台设置'
    },
    children: [
      {
        key: '31',
        text: '用户协议',
        path: '/platform/license'
      },
      {
        key: '32',
        text: '帮助中心',
        path: '/platform/help'
      }
    ]
  }
]

export const groupKey = sidebarData.map(item => item.key)