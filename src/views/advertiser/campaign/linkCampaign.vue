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
    <v-col cols="12">
      <v-form class="advertiser-link-campaign py-8">
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
              v-model="price"
              label="Price"
              outlined
              placeholder="Price"
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
              label="Marketers Number"
              outlined
              placeholder="Marketers Number"
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
              label="Days Number"
              outlined
              placeholder="Days Number"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="clickNumber"
              label="Click Number"
              outlined
              placeholder="Click Number"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="actNumber"
              label="Act Number"
              outlined
              placeholder="Act Number"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="priceReminder"
              label="Price Reminder"
              outlined
              placeholder="Price Reminder"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="registerNumber"
              label="Register Number"
              outlined
              placeholder="Register Number"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="Marketer Level"
              :items="marketerLevel.data.data"
              item-text="title"
              item-value="id"
              outlined
              v-model="marketerLevelId"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="Type"
              :items="[{title: 'Introducer Code', id: 'IntroducerCode'}, {title: 'Share Link', id: 'ShareLink'}]"
              item-text="title"
              item-value="id"
              outlined
              v-model="type"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="Plan"
              :items="planData"
              item-text="id"
              item-value="id"
              outlined
              v-model="plan"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-select
              label="Link"
              :items="linkList.data.data"
              item-text="name"
              item-value="id"
              outlined
              v-model="linkId"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <v-file-input
              label="Upload Image"
              outlined
              @change="onFileChange"
              v-model="image"
            ></v-file-input>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" @click="createLinkCampaign">
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
      linkCampaignList: [],
      title: '',
      description: '',
      price: '',
      marketerLevelId: '',
      marketersNumber: '',
      daysNumber: '',
      clickNumber: '',
      actNumber: '',
      plan: '',
      priceReminder: '',
      type: '',
      linkId: '',
      image: null,
      registerNumber: '',
      marketerLevel: [],
      linkList: [],
      shareLinkPanelList: [],
      introducerCodePanelList: [],
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
  computed: {
    planData() {
      if (this.type === 'IntroducerCode') {
        return this.introducerCodePanelList.data.data
      } if (this.type === 'ShareLink') {
        return this.shareLinkPanelList.data.data
      }

      return undefined
    },
  },
  created() {
    this.getLinkCampaignList()
    this.getMarketerLevel()
    this.getAllLinks()
    this.getAllIntroducerCodePanelLevel()
    this.getAllShareLinkPanelLevel()
  },
  methods: {
    async getAllShareLinkPanelLevel() {
      try {
        this.shareLinkPanelList = await Axios.get('admin/level/share-link-level')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllIntroducerCodePanelLevel() {
      try {
        this.introducerCodePanelList = await Axios.get('admin/level/introducer-code-level')
      } catch (error) {
        console.log(error)
      }
    },
    async getLinkCampaignList() {
      try {
        this.linkCampaignList = await Axios.get('advertise-owner/campaign/link/')
      } catch (error) {
        console.log(error)
      }
    },
    onFileChange() {
      const formData = new FormData()
      formData.append('image', this.image)
      this.image = formData
    },
    async createLinkCampaign() {
      try {
        console.log(this.image)
        await Axios.post('advertise-owner/campaign/link/', {
          title: this.title,
          description: this.description,
          price: this.price,
          marketerLevelId: this.marketerLevelId,
          marketersNumber: this.marketersNumber,
          daysNumber: this.daysNumber,
          clickNumber: this.clickNumber,
          actNumber: this.actNumber,
          plan: this.plan,
          priceReminder: this.priceReminder,
          type: this.type,
          linkId: this.linkId,
          image: this.image,
          registerNumber: this.registerNumber,
        })
        this.$store.commit('setNotification', {
          title: 'Create link campaign successfully',
          type: 'success',
          isShow: true,
        })
        await this.getLinkCampaignList()
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Create link campaign not successfully',
          type: 'error',
          isShow: true,
        })
      }
    },
    async getMarketerLevel() {
      try {
        this.marketerLevel = await Axios.get('admin/marketer/marketer-level')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllLinks() {
      try {
        this.linkList = await Axios.get('advertise-owner/link/')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
  .advertiser-link-campaign {
    border-radius: 12px;
  }
</style>
