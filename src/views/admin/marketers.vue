<template>
  <v-row>
    <v-col
      cols="12"
    >
      <v-card>
        <v-data-table
          :headers="headers"
          :items="marketerList.data.data"
          item-key="full_name"
          class="table-rounded"
          hide-default-footer
        >
          <!-- name -->
          <template #[`item.firstName`]="{item}">
            <div class="d-flex flex-column" @click="goToSingleMarketer(item.id)" style="cursor:pointer;">
              <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.firstName }} {{ item.lastName }}</span>
            </div>
          </template>
          <template #[`item.isBanned`]="{item}">
<!--            <v-switch-->
<!--              v-model="item.isBanned"-->
<!--              inset-->
<!--              @change="toggleUserStatus(item.isBanned, item.id)"-->
<!--            ></v-switch>-->
            <v-btn
              color="primary"
              outlined
              v-if="item.isBanned"
              @click="unbanUser(item.id)"
            >unban marketer</v-btn>
            <v-btn
              color="primary"
              outlined
              v-else
              @click="banUser(item.id)"
            >ban marketer</v-btn>
          </template>
          <template #[`item.marketerLevelId`]="{item}">
            <div class="d-flex flex-column">
              <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.marketer_level.title }}</span>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-col cols="12" class="text-h6 pb-0">Create Marketer Level</v-col>
      <v-col cols="12" class="d-flex pt-2 align-baseline">
        <v-text-field
          v-model="marketerLevelTitle"
          outlined
          style="max-width: 300px"
          label="enter marketer level"
        ></v-text-field>
        <v-btn @click="createMarketerLevel" color="primary" class="ml-3">save</v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      marketerList: [],
      marketerLevel: [],
      id: '3c10a8d2-f213-43a5-9562-6bfc59614f56',
      headers: [
        { text: 'NAME', value: 'firstName' },
        { text: 'EMAIL', value: 'email' },
        { text: 'STATUS', value: 'isBanned' },
        { text: 'MARKETER LEVEL', value: 'marketerLevelId' },
      ],
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
      marketerLevelTitle: '',
    }
  },
  created() {
    this.getMarketerList()
    this.getMarketerLevel()
  },
  methods: {
    async getMarketerList() {
      try {
        this.marketerList = await Axios.get('admin/marketer')
      } catch (error) {
        console.log(error)
      }
    },

    // toggleUserStatus(event, id) {
    //   if (event) {
    //     this.unbanUser(id)
    //   } else {
    //     this.banUser(id)
    //   }
    // },
    async banUser(marketerID) {
      try {
        await Axios.put(`admin/marketer/ban/${marketerID}`)
        await this.getMarketerList()
        this.$store.commit('setNotification', {
          title: 'Ban user successfully',
          type: 'success',
          isShow: true,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async unbanUser(marketerID) {
      try {
        await Axios.put(`admin/marketer/unban/${marketerID}`)
        await this.getMarketerList()
        this.$store.commit('setNotification', {
          title: 'Unban user successfully',
          type: 'success',
          isShow: true,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async createMarketerLevel() {
      try {
        await Axios.post('admin/marketer', {
          title: this.marketerLevelTitle,
        })
        this.marketerLevelTitle = ''
        this.$store.commit('setNotification', {
          title: 'Create marketer level successfully',
          type: 'success',
          isShow: true,
        })
      } catch (error) {
        console.log(error)
      }
    },
    goToSingleMarketer(id) {
      this.$route.params.id = id
      this.$router.push({ name: 'admin-single-marketer' })
    },
  },
}
</script>

<style>

</style>
