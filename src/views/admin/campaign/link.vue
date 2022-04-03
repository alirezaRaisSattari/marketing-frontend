<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="linkCampaignList.data.data"
          item-key="full_name"
          class="table-rounded"
          hide-default-footer
        >
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      linkCampaignList: '',
      headers: [
        { text: 'Marketer Percent', value: 'marketerPercent' },
      ],
    }
  },
  created() {
    this.getAllLinkCampaign()
  },
  methods: {
    async getAllLinkCampaign() {
      try {
        this.linkCampaignList = await Axios.get('admin/campaign/link')
      } catch (error) {
        console.log(error)
      }
    },
    async updateVerifyLinkCampaign(id) {
      try {
        await Axios.put(`admin/campaign/link/verifiy/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
