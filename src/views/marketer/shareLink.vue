<template>
  <v-col cols="12"></v-col>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      linkCampaignId: null,
    }
  },
  methods: {
    async createShareLink() {
      try {
        await Axios.post('marketer/createsharelink', {
          linkCampaignId: this.linkCampaignId,
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
