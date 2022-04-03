<template>
  <v-row>
    <v-col cols="12">Discount Code Campaign</v-col>
    <v-col cols="12">
      <v-card>
<!--        <v-data-table-->
<!--          :headers="campaignHeaders"-->
<!--          :items="discountCampaignList.data.data"-->
<!--          item-key="full_name"-->
<!--          class="table-rounded"-->
<!--          hide-default-footer-->
<!--        >-->
<!--          <template #[`item.verifyByAdmin`] ="{item}">-->
<!--            <span>{{ item.verifyByAdmin ? 'Yes' : 'No' }}</span>-->
<!--          </template>-->
<!--        </v-data-table>-->
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-form class="advertiser-invitation-code py-8">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="title"
              label="Title"
              outlined
              placeholder="Title"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="description"
              label="Description"
              outlined
              placeholder="Description"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="marketersNumber"
              label="Marketers number"
              outlined
              placeholder="Marketers number"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="daysNumber"
              label="Days number"
              outlined
              placeholder="Days number"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="maxUses"
              label="Max use"
              outlined
              placeholder="Max use"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="maxUseForEachUser"
              label="Max use for each"
              outlined
              placeholder="Max use for each"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="Invitation code campaign"
              :items="introducerCodePanelList.data.data"
              item-text="id"
              item-value="id"
              outlined
              v-model="campaignId"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="Invitation code campaign"
              :items="introducerCodePanelList.data.data"
              item-text="id"
              item-value="id"
              outlined
              v-model="campaignId"
            ></v-select>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" @click="createInvitationCode">
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
    <v-col cols="12 pt-16">Discount Code Campaign For User</v-col>
    <v-col cols="12">
<!--      <v-card>-->
<!--        <v-data-table-->
<!--          :headers="userHeaders"-->
<!--          :items="discountCodeUserList.data.data"-->
<!--          item-key="full_name"-->
<!--          class="table-rounded"-->
<!--          hide-default-footer-->
<!--        >-->
<!--          <template #[`item.verifyByAdmin`] ="{item}">-->
<!--            <span>{{ item.verifyByAdmin ? 'Yes' : 'No' }}</span>-->
<!--          </template>-->
<!--        </v-data-table>-->
<!--      </v-card>-->
    </v-col>
    <v-col cols="12"></v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      discountCampaignList: [],
      discountCodeUserList: [],
      marketerLevelId: null,
      startData: null,
      finishDate: null,
      percentLevel: null,
      maxUseForEachUser: null,
      title: null,
      marketersNumber: null,
      description: null,
      daysNumber: null,
      maxUses: null,
      userId: null,
      code: null,
      campaignHeaders: [
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'type' },
        { text: 'Price', value: 'price' },
        { text: 'Days number', value: 'daysNumber' },
        { text: 'Click number', value: 'clickNumber' },
        { text: 'Act number', value: 'actNumber' },
        { text: 'Marketers number', value: 'marketersNumber' },
        { text: 'Verify by admin', value: 'verifyByAdmin' },
      ],
      userHeaders: [
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'type' },
        { text: 'Price', value: 'price' },
        { text: 'Days number', value: 'daysNumber' },
        { text: 'Click number', value: 'clickNumber' },
        { text: 'Act number', value: 'actNumber' },
        { text: 'Marketers number', value: 'marketersNumber' },
        { text: 'Verify by admin', value: 'verifyByAdmin' },
      ],
    }
  },
  created() {
    this.getAllDiscountCodeCampaign()
    this.getAllDiscountCodeForUser()
    this.getAllBuyLinkPanelLevel()
  },
  methods: {
    async getAllBuyLinkPanelLevel() {
      try {
        this.buyLinkPanelList = await Axios.get('admin/level/buy-link-level')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllDiscountCodeCampaign() {
      try {
        this.discountCampaignList = await Axios.get('advertise-owner/discountCodeCampamign')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllDiscountCodeForUser() {
      try {
        this.discountCampaignList = await Axios.get('advertise-owner/discountCodeCampamign/discount-for-user')
      } catch (error) {
        console.log(error)
      }
    },
    async createDiscountCodeCampaign() {
      try {
        this.discountCampaignList = await Axios.post('advertise-owner/discountCodeCampamign', {
          marketerLevelId: this.marketerLevelId,
          startDate: this.startDate,
          finishDate: this.finishDate,
          percentLevel: this.percentLevel,
          maxUseForEachUser: this.maxUseForEachUser,
          title: this.title,
          marketersNumber: this.marketersNumber,
          description: this.description,
          daysNumber: this.daysNumber,
          maxUses: this.maxUses,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async createDiscountCodeForUser() {
      try {
        this.discountCampaignList = await Axios.post('advertise-owner/discountCodeCampamign/discount-for-user', {
          userId: this.userId,
          code: this.code,
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
