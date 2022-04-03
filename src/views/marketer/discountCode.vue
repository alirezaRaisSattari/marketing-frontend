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
      discountCampaignList: [],
      discountCodeList: [],
    }
  },
  created() {
    this.getAllDiscountCampaign()
    this.getAllDiscountCode()
  },
  methods: {
    async getAllDiscountCampaign() {
      try {
        this.discountCampaignList = await Axios.get('marketer/discount/discountCampaign')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllDiscountCode() {
      try {
        this.discountCodeList = await Axios.get('marketer/discount')
      } catch (error) {
        console.log(error)
      }
    },
    async sendReqTOGetDiscountCode(id) {
      try {
        await Axios.post(`marketer/discount${id}`)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>

</style>
