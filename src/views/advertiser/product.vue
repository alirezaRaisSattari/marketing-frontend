<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="productList.data.data"
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
      <v-form class="advertiser-link-campaign py-8">
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
              v-model="numbers"
              label="Numbers"
              outlined
              placeholder="Numbers"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            lg="4"
          >
            <v-text-field
              v-model="attribute"
              label="Attributes"
              outlined
              placeholder="Attributes"
              hide-details
            ></v-text-field>
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
            <v-btn color="primary" @click="createProduct">
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
      productList: [],
      title: null,
      description: null,
      price: null,
      numbers: null,
      attribute: null,
      image: null,
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Description', value: 'description' },
        { text: 'Price', value: 'price' },
        { text: 'Numbers', value: 'numbers' },
        { text: 'Verify by admin', value: 'verifyByAdmin' },
      ],
    }
  },
  created() {
    this.getAllProducts()
  },
  methods: {
    async getAllProducts() {
      try {
        this.productList = await Axios.get('advertise-owner/product/')
      } catch (error) {
        console.log(error)
      }
    },
    async createProduct() {
      try {
        const formData = new FormData()
        formData.append('image', this.image)
        await Axios.post('advertise-owner/product/', {
          title: this.title,
          description: this.description,
          price: this.price,
          numbers: this.numbers,
          attribute: this.attribute,
          image: formData,
        })
        await this.getAllProducts()
      } catch (error) {
        console.log(error)
      }
    },
    async deleteProduct(id) {
      try {
        await Axios.get(`advertise-owner/product/${id}`)
        await this.getAllProducts()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>

</style>
