<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5">
          <div class="title">
            <p>
              Title: <span v-if="active" class="m-2">{{ mainData.data.content.title }}</span>
            </p>
          </div>
        </div>
        <div class="col-12">
          <div class="description">
            <p>
              Description:
              <span v-if="active" class="m-2">{{ mainData.data.content.body }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <b-button
            variant="primary"
            :class="{ active }"
            @click="active = !active"
            >Get Content</b-button
          >
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <b-button v-b-modal.modal-xl variant="primary mt-5" v-if="active"
            >Show Corgis</b-button
          >
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div>
      <b-modal id="modal-xl" size="xl" title="Extra Large Modal">
        <VueTabulator v-model="pets" :options="options" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import { HTTP } from "./http-common";

export default {
  data() {
    return {
      active: false,
      mainData: [],
      pets: [],
      error: null,
      options: {
        columns: [
          { title: "ID", field: "id", width: 75 },
          { title: "Name", field: "name", width: 150 },
          {
            title: "Description",
            field: "description",
            formatter: "textarea",
            width: 220,
          },
          {
            title: "Image",
            field: "image",
            formatter: "image",
            formatterParams: {
              height: "250",
              width: "100%",
            },
          },
        ],
      },
    };
  },

  created() {
    HTTP.get(``)
      .then((response) => {
        this.mainData = response.data;
        this.pets = response.data.data.content.pets;
        console.log(this.pets);
      })
      .catch((e) => {
        this.error = e;
      });
  },
};
</script>

<style lang='scss'>
 
@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
 
</style>
