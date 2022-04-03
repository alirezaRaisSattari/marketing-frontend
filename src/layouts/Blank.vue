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
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  updated() {
    setTimeout(() => {
      this.$store.commit('removeNotification')
    }, 5000)
  },
}
</script>

<style lang="scss">
.notification-alert {
  position: fixed !important;
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
