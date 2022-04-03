<template>
  <v-row style="background-color: #fff; border-radius: 12px">
    <v-col cols="12" sm="6">
      <v-col cols="12" class="text-h6 text--primary pb-0">First Name</v-col>
      <v-col cols="12">{{ singleMarketerData.data.data.firstName }}</v-col>
    </v-col>
    <v-col cols="12" sm="6">
      <v-col cols="12" class="text-h6 text--primary pb-0">Last Name</v-col>
      <v-col cols="12">{{ singleMarketerData.data.data.lastName }}</v-col>
    </v-col>
    <v-col cols="12" sm="6">
      <v-col cols="12" class="text-h6 text--primary pb-0">Email</v-col>
      <v-col cols="12">{{ singleMarketerData.data.data.email }}</v-col>
    </v-col>
    <v-col cols="12" sm="6">
      <v-col cols="12" class="text-h6 text--primary pb-0">Marketer Level</v-col>
      <v-col cols="12">{{ singleMarketerData.data.data.marketer_level.title }}</v-col>
    </v-col>
    <v-col cols="12" sm="6" v-if="singleMarketerData.data.data.inviteCode">
      <v-col cols="12" class="text-h6 text--primary pb-0">Invite Code</v-col>
      <v-col cols="12">{{ singleMarketerData.data.data.inviteCode }}</v-col>
    </v-col>
    <v-col cols="12" sm="6">
      <v-col cols="12" class="text-h6 text--primary pb-0">Document Verified</v-col>
      <v-col cols="12" v-text="singleMarketerData.data.data.isDocumentVerified ? 'Yes' : 'No'"></v-col>
    </v-col>
    <v-col cols="12" sm="6">
      <v-col cols="12" class="text-h6 text--primary pb-0">Document Verified</v-col>
      <v-col cols="12" v-if="singleUserDocument.data.success">
        <a :href="'http://marketing-api.ir' + singleUserDocument.data.data.filePath">Download Document</a>
      </v-col>
      <v-col v-else>Document not uploaded</v-col>
    </v-col>
    <v-col cols="12" sm="6">
      <v-col cols="12" class="text-h6 text--primary pb-0">Change Level Marketer</v-col>
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-select
          :items="marketerLevel.data.data"
          item-value="id"
          item-text="title"
          v-model="currentMarketerLevel"
          outlined
          @change="changeLevelMarketer"
        ></v-select>
      </v-col>
    </v-col>
    <v-col cols="12" v-if="singleUserDocument.data.success">
      <v-col cols="12" class="text-h6 text--primary pb-0">Are Document Verified?</v-col>
      <v-col cols="12" class="d-flex align-baseline flex-wrap">
        <v-radio-group
          v-model="documentVerifiedStatus"
          mandatory
          class="col-3 pt-0"
        >
          <v-radio
            label="Yes"
            :value="true"
          ></v-radio>
          <v-radio
            label="No"
            :value="false"
          ></v-radio>
        </v-radio-group>
        <p class="col-12 py-0 mb-0">Reasons</p>
        <v-col cols="12">
          <textarea class="col px-3" style="border: 2px solid #62507d; border-radius: 9px" v-model="reasonDocumentVerify"></textarea>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn class="mr-3" style="color:#9155fd !important;" outlined :to="{ name: 'admin-marketers' }">Back</v-btn>
          <v-btn color="primary" @click="updateUserDocument">save</v-btn>
        </v-col>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      marketerLevel: [],
      singleMarketerData: {},
      singleUserDocument: {},
      documentVerifiedStatus: null,
      reasonDocumentVerify: '',
    }
  },
  computed: {
    currentMarketerLevel() {
      return this.singleMarketerData.data.data.marketerLevelId
    },
  },
  created() {
    this.getSingleMarketerData()
    this.getMarketerLevel()
    this.getSingleUserDocument()
  },
  methods: {
    async getSingleMarketerData() {
      try {
        this.singleMarketerData = await Axios.get(`admin/marketer/${this.$route.params.id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async getSingleUserDocument() {
      try {
        this.singleUserDocument = await Axios.get(`admin/document/${this.$route.params.id}`)
      } catch (error) {
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
    async changeLevelMarketer(e) {
      try {
        await Axios.put(`admin/marketer/set-level/${this.$route.params.id}`, {
          marketer_level_id: e,
        })
        this.getSingleMarketerData()
      } catch (error) {
        console.log(error)
      }
    },
    async updateUserDocument() {
      console.log(this.documentVerifiedStatus, this.reasonDocumentVerify)
      try {
        await Axios.put(`admin/document/${this.$route.params.id}`, {
          isVerified: this.documentVerifiedStatus,
          verificationMessage: this.reasonDocumentVerify,
        })
        this.reasonDocumentVerify = ''
        this.getSingleMarketerData()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
