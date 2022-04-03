import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/marketers',
    name: 'admin-marketers',
    component: () => import('@/views/admin/marketers.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/marketers/:id',
    name: 'admin-single-marketer',
    component: () => import('@/views/admin/singleMarketer.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/smsPanelLevel',
    name: 'admin-sms-panel-level',
    component: () => import('@/views/admin/smsPanelLevel.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/discountPanelLevel',
    name: 'admin-discount-panel',
    component: () => import('@/views/admin/discountPanelLevel.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/shareLinkPanelLevel',
    name: 'admin-share-link',
    component: () => import('@/views/admin/shareLinkPanelLevel.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/buyLinkPanelLevel',
    name: 'admin-buy-link',
    component: () => import('@/views/admin/buyLinkPanelLevel.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/introducerCodePanelLevel',
    name: 'admin-introducer-code',
    component: () => import('@/views/admin/introducerCodePanelLevel.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/smsPanel',
    name: 'admin-sms-panel',
    component: () => import('@/views/admin/smsPanel.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/linkCampaign',
    name: 'admin-campaign-link',
    component: () => import('@/views/admin/campaign/link.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/discountCampaign',
    name: 'admin-campaign-discount',
    component: () => import('@/views/admin/campaign/discount.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/productCampaign',
    name: 'admin-campaign-product',
    component: () => import('@/views/admin/campaign/product.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/document',
    name: 'marketer-document',
    component: () => import('@/views/marketer/document.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/invitationCode',
    name: 'marketer-invitation-code',
    component: () => import('@/views/marketer/invitationCode.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/buyLink',
    name: 'marketer-buy-link',
    component: () => import('@/views/marketer/buyLink.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/shareLink',
    name: 'marketer-share-link',
    component: () => import('@/views/marketer/shareLink.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/discountCode',
    name: 'marketer-discount-code',
    component: () => import('@/views/marketer/discountCode.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/smsPanelCampaign',
    name: 'marketer-sms-panel',
    component: () => import('@/views/marketer/smsPanelCampaign.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/linkCampaign',
    name: 'marketer-campaign-link',
    component: () => import('@/views/marketer/campaign/linkCampaign.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/marketer/productCampaign',
    name: 'marketer-campaign-product',
    component: () => import('@/views/marketer/campaign/productCampaign.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/advertiser/document',
    name: 'advertise-owner-document',
    component: () => import('@/views/advertiser/document.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/advertiser/invitationCode',
    name: 'advertise-owner-invitation-code',
    component: () => import('@/views/advertiser/invitationCode.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/advertiser/shareLink',
    name: 'advertise-owner-share-link',
    component: () => import('@/views/advertiser/shareLink.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/advertiser/discountCode',
    name: 'advertise-owner-discount-code',
    component: () => import('@/views/advertiser/discountCode.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/advertiser/smsPanelCampaign',
    name: 'advertise-owner-sms-panel',
    component: () => import('@/views/advertiser/smsPanelCampaign.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/advertiser/product',
    name: 'advertise-owner-product',
    component: () => import('@/views/advertiser/product.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/advertiser/link',
    name: 'advertise-owner-link',
    component: () => import('@/views/advertiser/link.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/advertiser/linkCampaign',
    name: 'advertise-owner-campaign-link',
    component: () => import('@/views/advertiser/campaign/linkCampaign.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/advertiser/productCampaign',
    name: 'advertise-owner-campaign-product',
    component: () => import('@/views/advertiser/campaign/productCampaign.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/payment.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/advertiser/login',
    name: 'advertise-owner-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/marketer/login',
    name: 'marketer-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/advertiser/register',
    name: 'advertise-owner-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/marketer/register',
    name: 'marketer-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('authenticated')) {
      next()
    } else {
      next({
        name: 'admin-login',
      })
    }
  } else {
    next()
  }
})

export default router
