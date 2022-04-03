<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="discountCampaignList.data.data"
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
      discountCampaignList: '',
      headers: [
        { text: 'Marketer Percent', value: 'marketerPercent' },
      ],
    }
  },
  created() {
    this.getAllDiscountCampaign()
  },
  methods: {
    async getAllDiscountCampaign() {
      try {
        this.discountCampaignList = await Axios.get('admin/campaign/discount')
      } catch (error) {
        console.log(error)
      }
    },
    async updateVerifyDiscountCampaign(id) {
      try {
        await Axios.put(`admin/campaign/discount/verifiy/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
