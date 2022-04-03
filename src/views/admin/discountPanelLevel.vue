<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="discountPanelList.data.data"
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
              v-model="percent"
              label="Percent"
              outlined
              placeholder="Percent"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="priceForEachUse"
              label="Price For Each Use"
              outlined
              placeholder="Price For Each Use"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="priceForUniqueUsersUse"
              label="Price For Unique Users Use"
              outlined
              placeholder="Price For Unique Users Use"
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
            <v-btn color="primary" @click="createDiscountPanelLevel">
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
            <span class="text-h5">Update discount code panel level</span>
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
                    v-model="percent"
                    label="Percent"
                    outlined
                    placeholder="Percent"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="priceForEachUse"
                    label="Price For Each Use"
                    outlined
                    placeholder="Price For Each Use"
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                  lg="4"
                >
                  <v-text-field
                    v-model="priceForUniqueUsersUse"
                    label="Price For Unique Users Use"
                    outlined
                    placeholder="Price For Unique Users Use"
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
              @click="updateDiscountPanelLevel"
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
      percent: '',
      priceType: '',
      marketerLevelId: '',
      discountPanelList: '',
      priceForEachUse: '',
      priceForUniqueUsersUse: '',
      dialog: false,
      updateId: null,
      headers: [
        { text: 'Marketer Percent', value: 'marketerPercent' },
        { text: 'Parent Marketer Percent', value: 'parentMarketerPercent' },
        { text: 'Price', value: 'price' },
        { text: 'Price For Each Day', value: 'priceForEachDay' },
        { text: 'Price For Each Marketer', value: 'priceForEachMarketer' },
        { text: 'Percent', value: 'percent' },
        { text: 'Price For Each Use', value: 'priceForEachUse' },
        { text: 'Price For Unique Users Use', value: 'priceForUniqueUsersUse' },
        { text: 'Price Type', value: 'priceType' },
        { text: 'Update', value: 'updatedAt' },
      ],
    }
  },
  created() {
    this.getAllDiscountPanelLevel()
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
    async getAllDiscountPanelLevel() {
      try {
        this.discountPanelList = await Axios.get('admin/level/discount-code-level')
      } catch (error) {
        console.log(error)
      }
    },
    async createDiscountPanelLevel() {
      try {
        await Axios.post('admin/level/discount-code-level', {
          marketerLevelId: this.marketerLevelId,
          marketerPercent: this.marketerPercent,
          price: this.price,
          parentMarketerPercent: this.parentMarketerPercent,
          priceForEachMarketer: this.priceForEachMarketer,
          priceForEachDay: this.priceForEachDay,
          percent: this.percent,
          priceForEachUse: this.priceForEachUse,
          priceForUniqueUsersUse: this.priceForUniqueUsersUse,
          priceType: this.priceType,
        })
        this.$store.commit('setNotification', {
          title: 'Create discount panel level successfully',
          type: 'success',
          isShow: true,
        })
        await this.getAllDiscountPanelLevel()
        this.marketerLevelId = ''
        this.marketerPercent = ''
        this.price = ''
        this.parentMarketerPercent = ''
        this.priceForEachMarketer = ''
        this.priceForEachDay = ''
        this.percent = ''
        this.priceType = ''
        this.priceForEachUse = ''
        this.priceForUniqueUsersUse = ''
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Create discount panel level not successfully',
          type: 'error',
          isShow: true,
        })
      }
    },
    async updateDiscountPanelLevel() {
      try {
        await Axios.put(`admin/level/discount-code-level/${this.updateId}`, {
          marketerLevelId: this.marketerLevelId,
          marketerPercent: this.marketerPercent,
          price: this.price,
          parentMarketerPercent: this.parentMarketerPercent,
          priceForEachMarketer: this.priceForEachMarketer,
          priceForEachDay: this.priceForEachDay,
          percent: this.percent,
          priceForEachUse: this.priceForEachUse,
          priceForUniqueUsersUse: this.priceForUniqueUsersUse,
          priceType: this.priceType,
        })
        this.$store.commit('setNotification', {
          title: 'Update discount panel level successfully',
          type: 'success',
          isShow: true,
        })
        this.dialog = false
        await this.getAllDiscountPanelLevel()
      } catch (error) {
        this.$store.commit('setNotification', {
          title: 'Update discount panel level not successfully',
          type: 'error',
          isShow: true,
        })
      } finally {
        this.dialog = false
        this.marketerLevelId = ''
        this.marketerPercent = ''
        this.price = ''
        this.parentMarketerPercent = ''
        this.priceForEachMarketer = ''
        this.priceForEachDay = ''
        this.percent = ''
        this.priceType = ''
        this.priceForEachUse = ''
        this.priceForUniqueUsersUse = ''
      }
    },
    closeDialog() {
      this.dialog = false
      this.marketerLevelId = ''
      this.marketerPercent = ''
      this.price = ''
      this.parentMarketerPercent = ''
      this.priceForEachMarketer = ''
      this.priceForEachDay = ''
      this.percent = ''
      this.priceType = ''
      this.priceForEachUse = ''
      this.priceForUniqueUsersUse = ''
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
