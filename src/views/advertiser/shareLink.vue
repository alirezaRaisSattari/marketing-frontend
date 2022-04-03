<template>
  <v-row></v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      shareLinkId: '',
      linkCampaignId: '',
    }
  },
  methods: {
    async getShareLinkById() {
      try {
        await Axios.post('advertise-owner/sharelink/getbyid', {
          sharelinkid: this.shareLinkId,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getShareLinkByLinkId() {
      try {
        await Axios.post('advertise-owner/sharelink/getbylinkid', {
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
