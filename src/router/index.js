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
  {
    path: '/',
    name: 'login',
    hidden: true,//是否显示
    meta: {
      title: 'login'
    },
    component: () => import('../views/login')
  },
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
    name: 'topic_manage',
    hidden: true,
    adminname: '话题管理',
    icon: 'el-icon-edit-outline',
    meta: {
      title: 'topic_manage'
    },
    children: [
      {
        adminname: '话题列表',
        path: 'topic_list',
        component: () => import("../views/topicManage"),
        name: 'topic_list',
        meta: {
          title: 'topic_list'
        }
      }
    ]
  },
    // 概况管理
    {
      path: '/survey_manage',
      component: Layout,
      name: 'survey_manage',
      icon: 'el-icon-user',
      adminname: '概况管理',
      meta: {
        title: 'survey_manage'
      },
      children: [
        {
          adminname: '概况信息',
          path: 'survey_list',
          component: () => import("../views/surveyManage"),
          name: 'survey_list',
          meta: {
            title: 'survey_list'
          }
        },
        {
          adminname: '添加概况信息',
          path: 'add_survey',
          component: () => import("../views/surveyManage/addsurvey.vue"),
          name: 'add_survey',
          meta: {
            title: 'add_survey'
          }
        }
      ]
    },
  // 内容管理
  {
    path: '/content_manage',
    component: Layout,
    adminname: '内容管理',
    name: 'content_manage',
    icon: 'el-icon-tickets',
    meta: {
      title: 'content_manage'
    },
    children: [
      {
        path: 'content_list',
        adminname: '公告管理',
        component: () => import("../views/contentManage"),
        name: 'content_list',
        meta: {
          title: 'content_list'
        }
      }
    ]
  },
  // 团委管理
  {
    path: '/cyl_manage',
    component: Layout,
    name: 'cyl_manage',
    icon: 'el-icon-user',
    adminname: '团委管理',
    meta: {
      title: 'cyl_manage'
    },
    children: [
      {
        adminname: '团委信息',
        path: 'cyl_list',
        component: () => import("../views/cylManage"),
        name: 'cyl_list',
        meta: {
          title: 'cyl_list'
        }
      },
      {
        adminname: '添加团委信息',
        path: 'add_cyl',
        component: () => import("../views/cylManage/addcyl.vue"),
        name: 'add_cyl',
        meta: {
          title: 'add_cyl'
        }
      }
    ]
  },
  // 高考管理
  {
    path: '/examination_manage',
    component: Layout,
    name: 'examination_manage',
    icon: 'el-icon-user',
    adminname: '高考管理',
    meta: {
      title: 'examination_manage'
    },
    children: [
      {
        adminname: '高考信息',
        path: 'examination_list',
        component: () => import("../views/examinationManage"),
        name: 'examination_list',
        meta: {
          title: 'examination_list'
        }
      },
      {
        adminname: '添加高考信息',
        path: 'add_examination',
        component: () => import("../views/examinationManage/addexamination.vue"),
        name: 'add_examination',
        meta: {
          title: 'add_examination'
        }
      }
    ]
  },
  // 图书馆管理
  {
    path: '/library_manage',
    component: Layout,
    name: 'library_manage',
    icon: 'el-icon-user',
    adminname: '图书馆管理',
    meta: {
      title: 'library_manage'
    },
    children: [
      {
        adminname: '图书馆信息',
        path: 'library_list',
        component: () => import("../views/libraryManage"),
        name: 'library_list',
        meta: {
          title: 'library_list'
        }
      },
      {
        adminname: '添加图书馆信息',
        path: 'add_library',
        component: () => import("../views/libraryManage/addlibrary.vue"),
        name: 'add_library',
        meta: {
          title: 'add_library'
        }
      }
    ]
  },
  // 新闻管理
  {
    path: '/news_manage',
    component: Layout,
    name: 'news_manage',
    icon: 'el-icon-user',
    adminname: '新闻管理',
    meta: {
      title: 'news_manage'
    },
    children: [
      {
        adminname: '新闻信息',
        path: 'news_list',
        component: () => import("../views/newsManage"),
        name: 'news_list',
        meta: {
          title: 'news_list'
        }
      },
      {
        adminname: '添加新闻信息',
        path: 'add_news',
        component: () => import("../views/newsManage/addnews.vue"),
        name: 'add_news',
        meta: {
          title: 'add_news'
        }
      }
    ]
  },
  // 调研管理
  {
    path: '/research_manage',
    component: Layout,
    name: 'research_manage',
    icon: 'el-icon-user',
    adminname: '调研管理',
    meta: {
      title: 'research_manage'
    },
    children: [
      {
        adminname: '调研信息',
        path: 'research_list',
        component: () => import("../views/researchManage"),
        name: 'research_list',
        meta: {
          title: 'research_list'
        }
      },
      {
        adminname: '添加调研信息',
        path: 'add_research',
        component: () => import("../views/researchManage/addresearch.vue"),
        name: 'add_research',
        meta: {
          title: 'add_research'
        }
      }
    ]
  },
  // 校史管理
  {
    path: '/schoolhistory_manage',
    component: Layout,
    name: 'schoolhistory_manage',
    icon: 'el-icon-user',
    adminname: '校史管理',
    meta: {
      title: 'schoolhistory_manage'
    },
    children: [
      {
        adminname: '校史信息',
        path: 'schoolhistory_list',
        component: () => import("../views/schoolhistoryManage"),
        name: 'schoolhistory_list',
        meta: {
          title: 'schoolhistory_list'
        }
      },
      {
        adminname: '添加校史信息',
        path: 'add_schoolhistory',
        component: () => import("../views/schoolhistoryManage/addschoolhistory.vue"),
        name: 'add_schoolhistory',
        meta: {
          title: 'add_schoolhistory'
        }
      }
    ]
  },
  // 学子管理
  {
    path: '/student_manage',
    component: Layout,
    name: 'student_manage',
    icon: 'el-icon-user',
    adminname: '学子管理',
    meta: {
      title: 'student_manage'
    },
    children: [
      {
        adminname: '学子信息',
        path: 'student_list',
        component: () => import("../views/studentManage"),
        name: 'student_list',
        meta: {
          title: 'student_list'
        }
      },
      {
        adminname: '添加学子信息',
        path: 'add_student',
        component: () => import("../views/studentManage/addstudent.vue"),
        name: 'add_student',
        meta: {
          title: 'add_student'
        }
      }
    ]
  },
   // 相册管理
   {
    path: '/album_manage',
    component: Layout,
    name: 'album_manage',
    icon: 'el-icon-user',
    adminname: '相册管理',
    meta: {
      title: 'album_manage'
    },
    children: [
      {
        adminname: '相册信息',
        path: 'album_list',
        component: () => import("../views/albumManage"),
        name: 'album_list',
        meta: {
          title: 'album_list'
        }
      },
      {
        adminname: '添加相册信息',
        path: 'add_album',
        component: () => import("../views/albumManage/addalbum"),
        name: 'add_album',
        meta: {
          title: 'add_album'
        }
      }
    ]
  },
  // 师资管理
  {
    path: '/teacher_manage',
    component: Layout,
    name: 'teacher_manage',
    icon: 'el-icon-user',
    adminname: '师资管理',
    meta: {
      title: 'teacher_manage'
    },
    children: [
      {
        adminname: '师资信息',
        path: 'teacher_list',
        component: () => import("../views/teacherManage"),
        name: 'teacher_list',
        meta: {
          title: 'teacher_list'
        }
      },
      {
        adminname: '添加师资信息',
        path: 'add_teacher',
        component: () => import("../views/teacherManage/addteacher"),
        name: 'add_teacher',
        meta: {
          title: 'add_teacher'
        }
      }
    ]
  },
   // 用户管理
   {
    path: '/user_manage',
    component: Layout,
    name: 'user_manage',
    icon: 'el-icon-user',
    adminname: '用户管理',
    meta: {
      title: 'user_manage'
    },
    children: [
      {
        adminname: '用户列表',
        path: 'user_list',
        component: () => import("../views/userManage"),
        name: 'user_list',
        meta: {
          title: 'user_list'
        }
      },
      {
        adminname: '添加用户',
        path: 'add_user',
        component: () => import("../views/userManage/adduser.vue"),
        name: 'add_user',
        meta: {
          title: 'add_user'
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
