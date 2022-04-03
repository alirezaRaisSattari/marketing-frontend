<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="productCampaignList.data.data"
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
      productCampaignList: '',
      headers: [
        { text: 'Marketer Percent', value: 'marketerPercent' },
      ],
    }
  },
  created() {
    this.getAllProductCampaign()
  },
  methods: {
    async getAllProductCampaign() {
      try {
        this.productCampaignList = await Axios.get('admin/campaign/product')
      } catch (error) {
        console.log(error)
      }
    },
    async updateVerifyProductCampaign(id) {
      try {
        await Axios.put(`admin/campaign/product/verifiy/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
