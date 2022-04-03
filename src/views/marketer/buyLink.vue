<template>
  <v-row></v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  methods: {
    async buyLink(id) {
      try {
        await Axios.post(`marketer/buyLink/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
