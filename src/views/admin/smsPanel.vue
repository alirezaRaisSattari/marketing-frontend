<template>
  <v-row style="border-radius: 12px;">
    <v-col>
      {{ smsPanelList.data.messages }}
    </v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      smsPanelList: [],
    }
  },
  created() {
    this.getAllSMSPanel()
  },
  methods: {
    async getAllSMSPanel() {
      try {
        this.smsPanelList = await Axios.get('admin/smspanel')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
