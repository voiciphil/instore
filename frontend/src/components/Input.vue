<template>
  <div class="body">
    <v-text-field
      v-model="address"
      class="mt-5 mb-0 ml-10 mr-10"
      outlined="outlined"
      label="URL"
      hint="인스타그램 게시물의 URL을 입력하세요."
    >
    </v-text-field>
    <v-btn
      v-on:click="getPictures"
      class="mt-n5"
      rounded
    >
      {{ btn }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btn: 'GO!',
      address: ''
    }
  },
  methods: {
    getPictures () {

    }
  }
}
</script>

<style>
  .body {
    text-align: center;
  }
</style>
