<template>
  <v-row>
    <v-col cols="12"></v-col>
    <v-col cols="12">
      <v-form class="advertiser-link-campaign py-8">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="phoneNumber"
              label="Phone Number"
              outlined
              placeholder="Phone Number"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="SMS Panel Marketer"
              items=""
              item-text="title"
              item-value="id"
              outlined
              v-model="smsPanelMarketerId"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="Product campaign"
              :items="productCampaignList.data.data"
              item-text="title"
              item-value="id"
              outlined
              v-model="productCampaignId"
            ></v-select>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" @click="setCodeSMSPanelForUser">
              Submit
            </v-btn>
            <!--            <v-btn-->
            <!--              outlined-->
            <!--              class="mx-2"-->
            <!--            >-->
            <!--              Reset-->
            <!--            </v-btn>-->
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      smsPanelCampaignList: [],
      productCampaignList: [],
      phoneNumber: null,
      smsPanelMarketerId: null,
      productCampaignId: null,
    }
  },
  created() {
    this.getAllSMSPanelCampaign()
    this.getProductCampaignList()
  },
  methods: {
    async getAllSMSPanelCampaign() {
      try {
        this.smsPanelCampaignList = await Axios.get('advertise-owner/sms-panel-campaign/cfd4e8dc-b598-4669-a1c1-cbf94c71d3c5')
      } catch (error) {
        console.log(error)
      }
    },
    async setCodeSMSPanelForUser() {
      try {
        await Axios.post('advertise-owner/sms-panel-campaign/set-for-user',{
          phone_number: this.phoneNumber,
          smsPanelMarketerId: this.smsPanelMarketerId,
          productCampaignId: this.productCampaignId,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getProductCampaignList() {
      try {
        this.productCampaignList = await Axios.get('advertise-owner/campaign/product/')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
