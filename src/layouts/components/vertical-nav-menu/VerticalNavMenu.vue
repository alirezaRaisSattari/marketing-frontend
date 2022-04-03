<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/logo.svg')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-x-transition>
          <h2 class="app-title text--primary">
            MATERIO
          </h2>
        </v-slide-x-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <template v-if="role === 'admin'">
        <nav-menu-link
          v-if="role === 'admin'"
          title="Marketers"
          :to="{ name: 'admin-marketers' }"
          :icon="icons.mdiAccountCircleOutline"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'admin'"
          title="SMS Panel Level"
          :to="{ name: 'admin-sms-panel-level' }"
          :icon="icons.mdiAndroidMessages"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'admin'"
          title="Discount Panel Level"
          :to="{ name: 'admin-discount-panel' }"
          :icon="icons.mdiSale"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'admin'"
          title="Share Link Panel Level"
          :to="{ name: 'admin-share-link' }"
          :icon="icons.mdiShareVariantOutline"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'admin'"
          title="Buy Link Panel Level"
          :to="{ name: 'admin-buy-link' }"
          :icon="icons.mdiShopping"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'admin'"
          title="Introducer Code Panel Level"
          :to="{ name: 'admin-introducer-code' }"
          :icon="icons.mdiCodeTagsCheck"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'admin'"
          title="SMS Panel"
          :to="{ name: 'admin-sms-panel' }"
          :icon="icons.mdiAndroidMessages"
        ></nav-menu-link>
        <nav-menu-group
          v-if="role === 'admin'"
          title="campaign"
          :icon="icons.mdiCampfire"
        >
          <nav-menu-link
            title="Link"
            :to="{ name: 'admin-campaign-link' }"
          ></nav-menu-link>
          <nav-menu-link
            title="Discount"
            :to="{ name: 'admin-campaign-discount' }"
          ></nav-menu-link>
          <nav-menu-link
            title="Product"
            :to="{ name: 'admin-campaign-product' }"
          ></nav-menu-link>
        </nav-menu-group>
      </template>
      <template v-if="role === 'marketer'">
        <nav-menu-link
          v-if="role === 'marketer'"
          title="Document"
          :to="{ name: 'marketer-document' }"
          :icon="icons.mdiFileDocumentOutline"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'marketer'"
          title="Invitation Code"
          :to="{ name: 'marketer-invitation-code' }"
          :icon="icons.mdiCodeTagsCheck"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'marketer'"
          title="Buy Link"
          :to="{ name: 'marketer-buy-link' }"
          :icon="icons.mdiShopping"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'marketer'"
          title="Share Link"
          :to="{ name: 'marketer-share-link' }"
          :icon="icons.mdiShareVariantOutline"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'marketer'"
          title="Discount Code"
          :to="{ name: 'marketer-discount-code' }"
          :icon="icons.mdiCodeTagsCheck"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'marketer'"
          title="SMS Panel Campaign"
          :to="{ name: 'marketer-sms-panel' }"
          :icon="icons.mdiAndroidMessages"
        ></nav-menu-link>
        <nav-menu-group
          v-if="role === 'marketer'"
          title="campaign"
          :icon="icons.mdiCampfire"
        >
          <nav-menu-link
            title="Link"
            :to="{ name: 'marketer-campaign-link' }"
          ></nav-menu-link>
          <nav-menu-link
            title="Product"
            :to="{ name: 'marketer-campaign-product' }"
          ></nav-menu-link>
        </nav-menu-group>
      </template>
      <template v-if="role === 'advertise-owner'">
        <nav-menu-link
          v-if="role === 'advertise-owner'"
          title="Document"
          :to="{ name: 'advertise-owner-document' }"
          :icon="icons.mdiFileDocumentOutline"
        ></nav-menu-link>
        <nav-menu-group
          v-if="role === 'advertise-owner'"
          title="campaign"
          :icon="icons.mdiCampfire"
        >
          <nav-menu-link
            title="Link"
            :to="{ name: 'advertise-owner-campaign-link' }"
          ></nav-menu-link>
          <nav-menu-link
            title="Product"
            :to="{ name: 'advertise-owner-campaign-product' }"
          ></nav-menu-link>
        </nav-menu-group>
        <nav-menu-link
          v-if="role === 'advertise-owner'"
          title="Invitation Code"
          :to="{ name: 'advertise-owner-invitation-code' }"
          :icon="icons.mdiCodeTagsCheck"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'advertise-owner'"
          title="Share Link"
          :to="{ name: 'advertise-owner-share-link' }"
          :icon="icons.mdiShareVariantOutline"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'advertise-owner'"
          title="Discount Code"
          :to="{ name: 'advertise-owner-discount-code' }"
          :icon="icons.mdiCodeTagsCheck"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'advertise-owner'"
          title="SMS Panel Campaign"
          :to="{ name: 'advertise-owner-sms-panel' }"
          :icon="icons.mdiAndroidMessages"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'advertise-owner'"
          title="Product"
          :to="{ name: 'advertise-owner-product' }"
          :icon="icons.mdiReproduction"
        ></nav-menu-link>
        <nav-menu-link
          v-if="role === 'advertise-owner'"
          title="Link"
          :to="{ name: 'advertise-owner-link' }"
          :icon="icons.mdiFileLink"
        ></nav-menu-link>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiAccountCircleOutline,
  mdiAndroidMessages, mdiSale, mdiShareVariantOutline, mdiShopping, mdiCodeTagsCheck, mdiCampfire,
  mdiFileDocumentOutline, mdiReproduction, mdiFileLink,
} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    role() {
      return localStorage.getItem('role')
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
        mdiAccountCircleOutline,
        mdiAndroidMessages,
        mdiSale,
        mdiShareVariantOutline,
        mdiShopping,
        mdiCodeTagsCheck,
        mdiCampfire,
        mdiFileDocumentOutline,
        mdiReproduction,
        mdiFileLink,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
