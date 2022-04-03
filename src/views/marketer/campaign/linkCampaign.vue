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
          <template #[`item.verifyByAdmin`] ="{item}">
            <span>{{ item.verifyByAdmin ? 'Yes' : 'No' }}</span>
          </template>
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
      linkCampaignList: [],
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'type' },
        { text: 'Price', value: 'price' },
        { text: 'Days number', value: 'daysNumber' },
        { text: 'Click number', value: 'clickNumber' },
        { text: 'Act number', value: 'actNumber' },
        { text: 'Marketers number', value: 'marketersNumber' },
        { text: 'Register number', value: 'registerNumber' },
        { text: 'Price reminder', value: 'priceRemainder' },
        { text: 'Status', value: 'status' },
        { text: 'Verify by admin', value: 'verifyByAdmin' },
      ],
    }
  },
  created() {
    this.getAllLinkCampaign()
  },
  methods: {
    async getAllLinkCampaign() {
      try {
        this.linkCampaignList = await Axios.get('marketer/campaign/link')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
