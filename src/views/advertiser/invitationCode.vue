<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="invitationCodeList.data.data"
          item-key="full_name"
          class="table-rounded"
          hide-default-footer
        ></v-data-table>
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
              v-model="customerPhone"
              label="Customer Phone"
              outlined
              placeholder="Customer Phone"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="invitationCode"
              label="Invitation Code"
              outlined
              placeholder="Invitation Code"
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
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      invitationCodeList: [],
      introducerCodePanelList: [],
      customerPhone: '',
      campaignId: '',
      invitationCode: '',
      headers: [
        { text: 'Customer Phone', value: 'customerPhone' },
        { text: 'Invitation Code', value: 'invitationCode' },
      ],
    }
  },
  created() {
    this.getAllInvitationCode()
    this.getAllIntroducerCodePanelLevel()
  },
  methods: {
    async getAllInvitationCode() {
      try {
        this.invitationCodeList = await Axios.get('advertise-owner/invitationCode')
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
    async createInvitationCode() {
      try {
        await Axios.post('advertise-owner/invitationCode', {
          customerPhone: this.customerPhone,
          campaignId: this.campaignId,
          invitationCode: this.invitationCode,
        })
        await this.getAllInvitationCode()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
  .advertiser-invitation-code {
    border-radius: 12px;
  }
</style>
