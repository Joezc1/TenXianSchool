import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

// 数据分析
//  {
//   path: '/data_analysis',
//   component: Layout,
//   name: 'data_analysis',
//   adminname: '数据分析',//显示名称
//   icon: 'el-icon-data-analysis',//icon图片
//   meta: {
//     title: 'data_analysis'
//   },
//   children: [
//     {
//       path: 'analysis_list',
//       component: () => import("../views/dataAnalysis"),
//       adminname: '数据列表',
//       upperpath: /data_analysis,//上级路径
//       name: 'analysis_list',
//       meta: {
//         title: 'analysis_list'
//       }
//     }
//   ]
// },

const routes = [
   // 首页
   {
    path: '',
    component: Layout,
    name: 'home_manage',
    adminname: '首页',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        component: () => import("../views/home"),
        name: 'home',
        meta: {
          title: '首页'
        }
      }
    ]
  },
   // 首页
   {
    path: '/notice_manage',
    component: Layout,
    name: 'notice_manage',
    adminname: '话题',
    hidden:true,
    icon: 'el-icon-edit-outline',
    meta: {
      title: '话题管理'
    },
    children: [
      {
        path: 'article',
        component: () => import("../views/notice"),
        name: 'notice',
        meta: {
          title: '话题'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,//是否显示
    meta: {
      title: 'login'
    },
    component: () => import('../views/login')
  },
  {
    path: '/register',
    name: 'register',
    hidden: true,//是否显示
    meta: {
      title: 'register'
    },
    component: () => import('../views/register')
  },
  // 测试布局
  {
    path: '/Layout',
    name: 'Layout',
    hidden: true,
    component: () => import('../views/layout')
  },
  // 话题管理
  {
    path: '/topic_manage',
    component: Layout,
    hidden: true,//是否显示
    name: 'topic_manage',
    adminname: '话题管理',
    icon: 'el-icon-edit-outline',
    meta: {
      title: 'topic_manage'
    },
    children: [
      {
        adminname: '话题列表',
        path: 'topic_list',
        upperpath: '/topic_manage',
        component: () => import("../views/topicManage"),
        name: 'topic_list',
        meta: {
          title: 'topic_list'
        }
      }
    ]
  },
  // 概况
  {
    path: '/survey_manage',
    component: Layout,
    name: 'survey_manage',
    adminname: '概况',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '概况'
    },
    children: [
      {
        path: 'survey',
        component: () => import("../views/survey"),
        name: 'survey',
        meta: {
          title: '藤县中学概况'
        }
      }
    ]
  },
  // 学校历史
  {
    path: '/schoolhistory_manage',
    component: Layout,
    name: 'schoolhistory_manage',
    adminname: '校史',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '校史'
    },
    children: [
      {
        path: '',
        component: () => import("../views/schoolhistory"),
        name: 'schoolhistory',
        meta: {
          title: '藤县中学校史'
        }
      },
      {
        path: 'schoolhistory_more',
        name: 'schoolhistory_more',
        hidden: true,//是否显示
        meta: {
          title: '更多'
        },
        component: () => import('../views/schoolhistory/more')
      },
    ]
  },
  // 新闻
  {
    path: '/news_manage',
    component: Layout,
    name: 'news_manage',
    adminname: '新闻',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '新闻'
    },
    children: [
      {
        path: '',
        component: () => import("../views/news"),
        name: 'news',
        meta: {
          title: '最新新闻'
        }
      },
      {
        path: 'news_more',
        component: () => import("../views/news/more"),
        name: 'news_more',
        hidden: true,//是否显示
        meta: {
          title: '更多'
        }
      }
    ]
  },

  // 团委
  {
    path: '/cyl_manage',
    component: Layout,
    name: 'cyl_manage',
    adminname: '团委',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '团委活动'
    },
    children: [
      {
        path: '',
        component: () => import("../views/cyl"),
        name: 'cyl',
        meta: {
          title: '团委活动'
        }
      },
      {
        path: 'cyl_more',
        name: 'cyl_more',
        hidden: true,//是否显示
        meta: {
          title: '更多'
        },
        component: () => import('../views/cyl/more')
      },
    ]
  },
  // 师资
  {
    path: '/teacher_manage',
    component: Layout,
    name: 'teacher_manage',
    adminname: '师资',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '师资力量'
    },
    children: [
      {
        path: '',
        component: () => import("../views/teacher"),
        name: 'teacher',
        meta: {
          title: '师资力量'
        }
      },
      {
        path: 'teacher_more',
        name: 'teacher_more',
        hidden: true,//是否显示
        meta: {
          title: '更多'
        },
        component: () => import('../views/teacher/more')
      },
    ]
  },
  // 学子信息
  {
    path: '/student_manage',
    component: Layout,
    name: 'student_manage',
    adminname: '学子',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '学子风采'
    },
    children: [
      {
        path: '',
        component: () => import("../views/student"),
        name: 'student',
        meta: {
          title: '学子风采'
        }
      },
      {
        path: 'student_more',
        component: () => import("../views/student/more"),
        hidden: true,//是否显示
        name: 'student_more',
        meta: {
          title: '更多'
        }
      }
    ]
  },
  // 高考
  {
    path: '/examination_manage',
    component: Layout,
    name: 'examination_manage',
    adminname: '高考',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '高考信息'
    },
    children: [
      {
        path: '',
        component: () => import("../views/examination"),
        name: 'examination',
        meta: {
          title: '高考信息'
        }
      },
      {
        path: 'examination_more',
        component: () => import("../views/examination/more"),
        name: 'examination_more',
        hidden:true,
        meta: {
          title: '更多'
        }
      }
    ]
  },
  // 教研
  {
    path: '/research_manage',
    component: Layout,
    name: 'research_manage',
    adminname: '教研',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '教研信息'
    },
    children: [
      {
        path: '',
        component: () => import("../views/research"),
        name: 'research',
        meta: {
          title: '教研信息'
        }
      },
      {
        path: 'research_more',
        component: () => import("../views/research/more"),
        name: 'research_more',
        meta: {
          title: '更多'
        },
        hidden:true,
      }
    ]
  },
  // 相册
  {
    path: '/album_manage',
    component: Layout,
    name: 'album_manage',
    adminname: '相册',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '最新相册'
    },
    children: [
      {
        path: '',
        component: () => import("../views/album"),
        name: 'album',
        meta: {
          title: '最新相册'
        }
      },
      {
        path: 'album_more',
        component: () => import("../views/album/more"),
        hidden:true,
        name: 'album_more',
        meta: {
          title: '更多'
        }
      }
    ]
  },

  // 图书馆
  {
    path: '/library_manage',
    component: Layout,
    name: 'library_manage',
    adminname: '图书馆',
    icon: 'el-icon-edit-outline',
    meta: {
      title: '图书馆一角'
    },
    children: [
      {
        path: '',
        component: () => import("../views/library"),
        name: 'library',
        meta: {
          title: '图书馆一角'
        }
      },
      {
        path: 'library_more',
        component: () => import("../views/library/more"),
        hidden:true,
        name: 'library_more',
        meta: {
          title: '更多'
        }
      }
    ]
  },


]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // if (to.meta.login) {
  // 	if(sessionStorage.getItem('logined') === 'true'){
  // 		next(true)
  // 	}else{
  // 		next(false)
  // 		this.$router.push('./login')
  // 	}
  // }else{
  // 	next(true)
  // }
  next(true)
})
export default router
