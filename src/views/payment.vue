<template>
  <v-container>
    <v-row class="px-lg-16">
      <v-col cols="12" lg="4">Specify</v-col>
      <v-col cols="12" lg="4">Image</v-col>
      <v-col cols="12" lg="4">Price</v-col>
      <v-col cols="12">
        <v-form>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              lg="5"
            >
              <v-text-field
                v-model="phoneNumber"
                label="Phone Number"
                outlined
                placeholder="Phone Number"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              lg="5"
            >
              <v-text-field
                v-model="postalCode"
                label="Postal Code"
                outlined
                placeholder="Postal Code"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              lg="2"
            >
              <v-text-field
                v-model="numbers"
                label="Numbers"
                outlined
                placeholder="Numbers"
                hide-details
                :append-icon="mdiPlus"
                :prepend-inner-icon="mdiMinus"
                @click:append="increment"
                @click:prepend-inner="decrement"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <v-text-field
                v-model="address"
                label="Address"
                outlined
                placeholder="Address"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPlus, mdiMinus } from '@mdi/js'

export default {
  data() {
    return {
      mdiPlus,
      mdiMinus,
      numbers: 0,
      postalCode: null,
      phoneNumber: null,
      address: null,
    }
  },
  methods: {
    increment() {
      this.numbers = Number(this.numbers) + 1
    },
    decrement() {
      if (this.numbers > 0) {
        this.numbers = Number(this.numbers) - 1
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
