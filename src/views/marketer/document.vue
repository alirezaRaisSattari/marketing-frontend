<template>
  <v-row style="width: auto;border-radius: 12px" class="flex-column pa-5">
    <v-col cols="12" sm="6" class="pb-5">
      <h4 v-if="this.downloadedFile.data.data && this.downloadedFile.data.data.length">Uploaded Documents</h4>
      <h4 v-else>No Files Uploaded</h4>
      <ul style="list-style: -moz-ethiopic-numeric" class="pt-3">
        <li class="py-3" v-for="file in this.downloadedFile.data.data" :key="file.filePath">
          <a style="text-decoration: none" target="_blank" :href="file.filePath">Download Document {{ file.filePath.split('/')[file.filePath.split('/').length - 1] }}</a>
        </li>
      </ul>
    </v-col>
    <v-col>
      <hr>
    </v-col>
    <v-col cols="12" sm="6" class="d-flex align-start pt-10">
      <v-file-input
        label="Upload Document"
        outlined
        v-model="file"
      ></v-file-input>
      <v-btn color="primary" class="ml-2 mt-2 mb-2 py-5" @click="uploadFile" :disabled="!file">Send Document</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      file: null,
      uploadedFile: '',
      downloadedFile: '',
    }
  },
  created() {
    this.getDocument()
  },
  methods: {
    onFileChange(e) {
      // eslint-disable-next-line prefer-destructuring
      this.file = e.target.files[0]
    },
    async uploadFile() {
      try {
        const formData = new FormData()
        formData.append('document', this.file)
        await Axios.post('marketer/document', formData)
        this.file = null
        this.$store.commit('setNotification', {
          title: 'Upload document successfully',
          type: 'success',
          isShow: true,
        })
        await this.getDocument()
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Upload document successfully',
          type: 'error',
          isShow: true,
        })
        console.log(error.data)
      }
    },
    async getDocument() {
      try {
        this.downloadedFile = await Axios.get('marketer/document')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
