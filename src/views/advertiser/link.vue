<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="linkList.data.data"
          item-key="full_name"
          class="table-rounded"
          hide-default-footer
        >
          <template #[`item.updatedAt`]="{item}">
            <!--            <v-switch-->
            <!--              v-model="item.isBanned"-->
            <!--              inset-->
            <!--              @change="toggleUserStatus(item.isBanned, item.id)"-->
            <!--            ></v-switch>-->
            <v-btn
              color="primary"
              outlined
              @click=""
            >update link</v-btn>
          </template>
          <template #[`item.deletedAt`]="{item}">
            <!--            <v-switch-->
            <!--              v-model="item.isBanned"-->
            <!--              inset-->
            <!--              @change="toggleUserStatus(item.isBanned, item.id)"-->
            <!--            ></v-switch>-->
            <v-btn
              color="error"
              outlined
              @click="deleteLink(item.id)"
            >delete link</v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-form class="py-8">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="linkName"
              label="Name"
              outlined
              placeholder="Name"
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
              v-model="link"
              label="Link"
              outlined
              placeholder="Link"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" @click="createLink">
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
      linkList: [],
      linkName: null,
      description: null,
      link: null,
      createLinkData: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Link', value: 'link' },
        { text: 'Update', value: 'updatedAt' },
        { text: 'Delete', value: 'deletedAt' },
      ],
    }
  },
  created() {
    this.getAllLinks()
  },
  methods: {
    async getAllLinks() {
      try {
        this.linkList = await Axios.get('advertise-owner/link/')
      } catch (error) {
        console.log(error)
      }
    },
    async createLink() {
      try {
        this.createLinkData = await Axios.post('advertise-owner/link/', {
          name: this.linkName,
          description: this.description,
          link: this.link,
        })
        if (this.createLinkData.data.success) {
          await this.getAllLinks()
          this.linkName = ''
          this.description = ''
          this.link = ''
          this.$store.commit('setNotification', {
            title: 'Create link successfully',
            type: 'success',
            isShow: true,
          })
        } else {
          this.$store.commit('setNotification', {
            title: this.createLinkData.data.error,
            type: 'error',
            isShow: true,
          })
        }
      } catch (error) {
        this.$store.commit('setNotification', {
          title: this.createLinkData.data.message,
          type: 'error',
          isShow: true,
        })
      }
    },
    async deleteLink(id) {
      try {
        await Axios.get(`advertise-owner/link/${id}`)
        this.$store.commit('setNotification', {
          title: 'Delete link successfully',
          type: 'success',
          isShow: true,
        })
        await this.getAllLinks()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
