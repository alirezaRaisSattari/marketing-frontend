<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('@/assets/images/logos/logo.svg')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">
              Materio
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Adventure starts here 🚀
          </p>
          <p class="mb-2">
            Make your app management easy and fun!
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="firstName"
              outlined
              label="first name"
              placeholder="first name"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              outlined
              label="last name"
              placeholder="last name"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="username"
              outlined
              label="username"
              placeholder="username"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="email"
              outlined
              label="email"
              placeholder="email"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="phoneNumber"
              outlined
              label="phone number"
              placeholder="phone number"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <v-checkbox
              hide-details
              class="mt-1"
            >
              <template #label>
                <div class="d-flex align-center flex-wrap">
                  <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy &amp; terms</a>
                </div>
              </template>
            </v-checkbox>

            <v-btn
              block
              color="primary"
              class="mt-6"
              @click="register()"
            >
              Sign Up
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            Already have an account?
          </span>
          <router-link :to="{ name:$route.name.replace('-register', '-login') }">
            Sign in instead
          </router-link>
        </v-card-text>

        <!-- divider -->
<!--        <v-card-text class="d-flex align-center mt-2">-->
<!--          <v-divider></v-divider>-->
<!--          <span class="mx-5">or</span>-->
<!--          <v-divider></v-divider>-->
<!--        </v-card-text>-->

        <!-- social link -->
<!--        <v-card-actions class="d-flex justify-center">-->
<!--          <v-btn-->
<!--            v-for="link in socialLink"-->
<!--            :key="link.icon"-->
<!--            icon-->
<!--            class="ms-1"-->
<!--          >-->
<!--            <v-icon :color="$vuetify.theme.dark ? link.colorInDark:link.color">-->
<!--              {{ link.icon }}-->
<!--            </v-icon>-->
<!--          </v-btn>-->
<!--        </v-card-actions>-->
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="190"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      phoneNumber: '',
      firstName: '',
      lastName: '',
      isPasswordVisible: false,
      registerData: '',
    }
  },
  methods: {
    async register() {
      localStorage.clear()
      try {
        this.registerData = await Axios.post(`${this.$route.name.replace('-register', '/')}auth/register`, {
          username: this.username,
          password: this.password,
          phone_number: this.phoneNumber,
          email: this.email,
          first_name: this.firstName,
          last_name: this.lastName,
        })
        console.log(this.registerData)
        if (this.registerData.data.status) {
          localStorage.setItem('token', this.registerData.data.data.token)
          localStorage.setItem('refreshToken', this.registerData.data.data.refreshToken)
          localStorage.setItem('authenticated', true)
          localStorage.setItem('role', this.$route.name.replace('-register', ''))
          window.location.href = '/'
        } else {
          this.$store.commit('setNotification', {
            title: this.registerData.data.message,
            type: 'error',
            isShow: true,
          })
        }
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Register not successfully',
          type: 'error',
          isShow: true,
        })
        console.log(error)
      }
    },
  },
  setup() {
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      socialLink,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
