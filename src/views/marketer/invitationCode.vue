<template>
  <v-row>
    <v-col>
    </v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      invitationCodeList: [],
      invitationCode: {},
    }
  },
  created() {
    this.getAllInvitationCode()
  },
  methods: {
    async getAllInvitationCode() {
      try {
        this.invitationCodeList = await Axios.get('marketer/invitationCode')
      } catch (error) {
        console.log(error)
      }
    },
    async getSingleInvitationCode(id) {
      try {
        this.invitationCodeList = await Axios.get(`marketer/invitationCode/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async buyInvitationCode(id) {
      try {
        this.invitationCodeList = await Axios.post(`marketer/invitationCode/buy/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
