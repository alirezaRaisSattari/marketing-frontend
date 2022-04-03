<template>
  <v-row>
    <v-col cols="12"></v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      smsPanelCampaignList: [],
      campaignId: null,
    }
  },
  created() {
    this.getAllSMSPanelCampaign()
  },
  methods: {
    async getAllSMSPanelCampaign() {
      try {
        this.smsPanelCampaignList = await Axios.get('marketer/sms-panel-campaign')
      } catch (error) {
        console.log(error)
      }
    },
    async getSMSCodeForSMSPanel() {
      try {
        await Axios.post('marketer/sms-panel-campaign', {
          campaignId: this.campaignId,
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
