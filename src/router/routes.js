
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'menu', component: () => import('pages/menu.vue') },
      {
        path: 'StoreList',
        component: () => import('pages/StoreList.vue')
      },
      {
        path: '/Category',
        secure: false,
        component: () => import('layouts/MyLayout'),
        children: [{
          path: '',
          component: () => import('pages/Category'),
          meta: {
            title: 'Category'
          }
        },
        {
          path: ':categoryId',
          component: () => import('pages/Category'),
          meta: {
            title: 'Category'
          }
        },
        {
          path: ':categoryId/:subCategoryId',
          component: () => import('pages/Category'),
          meta: {
            title: 'Finalize Grading'
          }
        }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
