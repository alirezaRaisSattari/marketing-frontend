<template>
  <v-app>
    <v-alert
      style="top: 40px; right: 40px;"
      class="notification-alert"
      :class="$store.state.notification.isShow ? 'notification-alert-show' : ''"
      :type="$store.state.notification.type"
      top
      right
      border="left"
      elevation="10"
    >
      {{ $store.state.notification.title }}
    </v-alert>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>
    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
          <v-text-field
            rounded
            dense
            outlined
            :prepend-inner-icon="icons.mdiMagnify"
            class="app-bar-search flex-grow-0"
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>

          <!-- Right Content -->
<!--          <a-->
<!--            href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"-->
<!--            target="_blank"-->
<!--            rel="nofollow"-->
<!--          >-->
<!--            <v-icon class="ms-6 me-4">-->
<!--              {{ icons.mdiGithub }}-->
<!--            </v-icon>-->
<!--          </a>-->
          <theme-switcher></theme-switcher>
<!--          <v-btn-->
<!--            icon-->
<!--            small-->
<!--            class="ms-3"-->
<!--          >-->
<!--            <v-icon>-->
<!--              {{ icons.mdiBellOutline }}-->
<!--            </v-icon>-->
<!--          </v-btn>-->
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

<!--    <v-footer-->
<!--      app-->
<!--      inset-->
<!--      color="transparent"-->
<!--      absolute-->
<!--      height="56"-->
<!--      class="px-0"-->
<!--    >-->
<!--      <div class="boxed-container w-full">-->
<!--        <div class="mx-6 d-flex justify-space-between">-->
<!--          <span>-->
<!--            &copy; 2021 <a-->
<!--              href="https://themeselection.com"-->
<!--              class="text-decoration-none"-->
<!--              target="_blank"-->
<!--            >ThemeSelection</a></span>-->
<!--          <span class="d-sm-inline d-none">-->
<!--            <a-->
<!--              href="https://themeselection.com/products/category/download-free-admin-templates/"-->
<!--              target="_blank"-->
<!--              class="me-6 text&#45;&#45;secondary text-decoration-none"-->
<!--            >Freebies</a>-->
<!--            <a-->
<!--              href="https://themeselection.com/blog/"-->
<!--              target="_blank"-->
<!--              class="me-6 text&#45;&#45;secondary text-decoration-none"-->
<!--            >Blog</a>-->
<!--            <a-->
<!--              href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/blob/main/LICENSE"-->
<!--              target="_blank"-->
<!--              class="text&#45;&#45;secondary text-decoration-none"-->
<!--            >MIT Licence</a>-->
<!--          </span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-footer>-->
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  updated() {
    setTimeout(() => {
      this.$store.commit('removeNotification')
    }, 5000)
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.notification-alert {
  position: fixed;
  right: 50px;
  top: 50px;
  width: 450px;
  z-index: 1000000;
  opacity: 0;
  transform: translateX(calc(100% + 100px));
  transition: opacity 0.4s ease-in, transform 0.2s ease-in;
  @media screen and (max-width: 600px) {
    right: 0 !important;
    left: 0 !important;
    margin: auto;
    width: 95vw !important;
    top: 30px !important;
  }
}

.notification-alert-show {
  opacity: 1;
  transform: translateX(0);
}
</style>
