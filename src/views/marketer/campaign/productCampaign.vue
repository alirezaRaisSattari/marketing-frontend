<template>
  <v-row>
    <v-col>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="productCampaignList.data.data"
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
      productCampaignList: [],
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
    this.getAllProductCampaign()
  },
  methods: {
    async getAllProductCampaign() {
      try {
        this.productCampaignList = await Axios.get('marketer/campaign/product')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
