<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="shareLinkPanelList.data.data"
          item-key="full_name"
          class="table-rounded"
          hide-default-footer
        >
          <template #[`item.updatedAt`]="{item}">
            <v-btn
              color="primary"
              dark
              @click="openDialog(item.id)"
            >
              Update
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-form class="admin-sms-panel py-8">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="marketerPercent"
              label="Market Percent"
              outlined
              placeholder="Market Percent"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="parentMarketerPercent"
              label="Parent Marketer Percent"
              outlined
              placeholder="Parent Marketer Percent"
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
              v-model="priceForEachDay"
              label="Price For Each Day"
              outlined
              placeholder="Price For Each Day"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="priceForEachMarketer"
              label="Price For Each Marketer"
              outlined
              placeholder="Price For Each Marketer"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="priceForEachClick"
              label="Price For Each Click"
              outlined
              placeholder="Price For Each Click"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="priceForEachAct"
              label="Price For Each Act"
              outlined
              placeholder="Price For Each Act"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="priceType"
              label="Price Type"
              outlined
              placeholder="Price Type"
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
            >

            </v-select>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" @click="createShareLinkPanelLevel">
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
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        overlay-color="rgba(22, 25, 25, 0.98)"
        overlay-opacity="1"
        max-width="1200"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Update share link panel level</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="marketerPercent"
                    label="Market Percent"
                    outlined
                    placeholder="Market Percent"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="parentMarketerPercent"
                    label="Parent Marketer Percent"
                    outlined
                    placeholder="Parent Marketer Percent"
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
                    v-model="priceForEachDay"
                    label="Price For Each Day"
                    outlined
                    placeholder="Price For Each Day"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="priceForEachMarketer"
                    label="Price For Each Marketer"
                    outlined
                    placeholder="Price For Each Marketer"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="priceForEachClick"
                    label="Price For Each Click"
                    outlined
                    placeholder="Price For Each Click"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="priceForEachAct"
                    label="Price For Each Act"
                    outlined
                    placeholder="Price For Each Act"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="priceType"
                    label="Price Type"
                    outlined
                    placeholder="Price Type"
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
                  >

                  </v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              dark
              @click="closeDialog"
            >
              Close
            </v-btn>
            <v-btn
              color="primary"
              dark
              @click="updateShareLinkPanelLevel"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-row>
</template>

<script>
import { Axios } from '@/api/axios'

export default {
  data() {
    return {
      marketerLevel: '',
      marketerPercent: '',
      price: '',
      parentMarketerPercent: '',
      priceForEachMarketer: '',
      priceForEachDay: '',
      priceForEachClick: '',
      priceType: '',
      marketerLevelId: '',
      shareLinkPanelList: '',
      priceForEachAct: '',
      updateId: null,
      dialog: false,
      headers: [
        { text: 'Marketer Percent', value: 'marketerPercent' },
        { text: 'Parent Marketer Percent', value: 'parentMarketerPercent' },
        { text: 'Price', value: 'price' },
        { text: 'Price For Each Day', value: 'priceForEachDay' },
        { text: 'Price For Each Marketer', value: 'priceForEachMarketer' },
        { text: 'Price For Each Click', value: 'priceForEachClick' },
        { text: 'Price For Each Act', value: 'priceForEachAct' },
        { text: 'Price Type', value: 'priceType' },
        { text: 'Update', value: 'updatedAt' },
      ],
    }
  },
  created() {
    this.getAllShareLinkPanelLevel()
    this.getMarketerLevel()
  },
  methods: {
    async getMarketerLevel() {
      try {
        this.marketerLevel = await Axios.get('admin/marketer/marketer-level')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllShareLinkPanelLevel() {
      try {
        this.shareLinkPanelList = await Axios.get('admin/level/share-link-level')
      } catch (error) {
        console.log(error)
      }
    },
    async createShareLinkPanelLevel() {
      try {
        await Axios.post('admin/level/share-link-level', {
          marketerLevelId: this.marketerLevelId,
          marketerPercent: this.marketerPercent,
          price: this.price,
          parentMarketerPercent: this.parentMarketerPercent,
          priceForEachMarketer: this.priceForEachMarketer,
          priceForEachDay: this.priceForEachDay,
          priceForEachClick: this.priceForEachClick,
          priceForEachAct: this.priceForEachAct,
          priceType: this.priceType,
        })
        this.$store.commit('setNotification', {
          title: 'Create share link panel level successfully',
          type: 'success',
          isShow: true,
        })
        await this.getAllShareLinkPanelLevel()
        this.marketerLevelId = ''
        this.marketerPercent = ''
        this.price = ''
        this.parentMarketerPercent = ''
        this.priceForEachMarketer = ''
        this.priceForEachDay = ''
        this.priceForEachClick = ''
        this.priceType = ''
        this.priceForEachAct = ''
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Create share link panel level not successfully',
          type: 'error',
          isShow: true,
        })
      }
    },
    async updateShareLinkPanelLevel() {
      try {
        await Axios.put(`admin/level/share-link-level/${this.updateId}`, {
          marketerLevelId: this.marketerLevelId,
          marketerPercent: this.marketerPercent,
          price: this.price,
          parentMarketerPercent: this.parentMarketerPercent,
          priceForEachMarketer: this.priceForEachMarketer,
          priceForEachDay: this.priceForEachDay,
          priceForEachClick: this.priceForEachClick,
          priceForEachAct: this.priceForEachAct,
          priceType: this.priceType,
        })
        this.$store.commit('setNotification', {
          title: 'Update share link panel level successfully',
          type: 'success',
          isShow: true,
        })
        this.dialog = false
        await this.getAllShareLinkPanelLevel()
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Update share link panel level not successfully',
          type: 'error',
          isShow: true,
        })
      } finally {
        this.marketerLevelId = ''
        this.marketerPercent = ''
        this.price = ''
        this.parentMarketerPercent = ''
        this.priceForEachMarketer = ''
        this.priceForEachDay = ''
        this.priceForEachClick = ''
        this.priceType = ''
        this.priceForEachAct = ''
        this.dialog = false
      }
    },
    closeDialog() {
      this.marketerLevelId = ''
      this.marketerPercent = ''
      this.price = ''
      this.parentMarketerPercent = ''
      this.priceForEachMarketer = ''
      this.priceForEachDay = ''
      this.priceForEachClick = ''
      this.priceType = ''
      this.priceForEachAct = ''
      this.dialog = false
    },
    openDialog(id) {
      this.dialog = true
      this.updateId = id
    },
  },
}
</script>

<style scoped>
.admin-sms-panel {
  border-radius: 12px;
}
</style>
