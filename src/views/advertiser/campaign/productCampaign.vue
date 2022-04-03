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
          <template #[`item.verifyByAdmin`] ="{item}">
            <span>{{ item.verifyByAdmin ? 'Yes' : 'No' }}</span>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-form class="advertiser-product-campaign py-8">
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
              v-model="smsNumber"
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
              :items="[{title: 'Buy link', id: 'BuyLink'}, {title: 'SMS panel', id: 'SMSPanel'}]"
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
              label="Product"
              items=""
              item-text="name"
              item-value="id"
              outlined
              v-model="productId"
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
              v-model="image"
            ></v-file-input>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" @click="createProductCampaign">
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
      productCampaignList: [],
      title: '',
      description: '',
      price: '',
      marketerLevelId: '',
      marketersNumber: '',
      daysNumber: '',
      smsNumber: '',
      actNumber: '',
      plan: '',
      priceReminder: '',
      type: '',
      productId: '',
      image: null,
      marketerLevel: [],
      productList: [],
      buyLinkPanelList: [],
      smsPanelList: [],
      headers: [
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
  computed: {
    planData() {
      if (this.type === 'SMSPanel') {
        return this.smsPanelList.data.data
      } if (this.type === 'BuyLink') {
        return this.buyLinkPanelList.data.data
      }

      return undefined
    },
  },
  created() {
    this.getProductCampaignList()
    this.getMarketerLevel()
    this.getAllProducts()
    this.getAllBuyLinkPanelLevel()
    this.getAllSMSPanelLevel()
  },
  methods: {
    async getProductCampaignList() {
      try {
        this.productCampaignList = await Axios.get('advertise-owner/campaign/product/')
      } catch (error) {
        console.log(error)
      }
    },
    async createProductCampaign() {
      try {
        await Axios.post('advertise-owner/campaign/product/', {
          title: this.title,
          description: this.description,
          price: this.price,
          marketerLevelId: this.marketerLevelId,
          marketersNumber: this.marketersNumber,
          daysNumber: this.daysNumber,
          smsNumber: this.smsNumber,
          actNumber: this.actNumber,
          plan: this.plan,
          priceReminder: this.priceReminder,
          type: this.type,
          productId: this.productId,
          image: this.image,
        })
        this.$store.commit('setNotification', {
          title: 'Create Product campaign successfully',
          type: 'success',
          isShow: true,
        })
        await this.getProductCampaignList()
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Create Product campaign not successfully',
          type: 'error',
          isShow: true,
        })
        console.log(error)
      }
    },
    async getMarketerLevel() {
      try {
        this.marketerLevel = await Axios.get('admin/marketer/marketer-level')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllProducts() {
      try {
        this.linkList = await Axios.get('advertise-owner/product/')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllBuyLinkPanelLevel() {
      try {
        this.buyLinkPanelList = await Axios.get('admin/level/buy-link-level')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllSMSPanelLevel() {
      try {
        this.smsPanelList = await Axios.get('admin/level/sms-panel-level')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.advertiser-product-campaign {
  border-radius: 12px;
}
</style>
