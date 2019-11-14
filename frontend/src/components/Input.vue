<template>
  <div class="body">
    <v-text-field
      v-model="address"
      class="mt-5 mb-0 ml-10 mr-10"
      outlined="outlined"
      clearable
      label="URL"
      hint="인스타그램 게시물의 URL을 입력하세요."
    >
    </v-text-field>
    <v-btn
      v-on:click="getPictures"
      class="mt-n5 mb-10"
      rounded
    >
      {{ btn }}
    </v-btn>
  </div>
</template>

<script>
import bus from '../bus'

export default {
  data () {
    return {
      btn: 'GO!',
      address: ''
    }
  },
  methods: {
    getPictures () {
      bus.$emit('init')
      this.$axios.post('http://localhost:3000/image/list', {
        link: this.address
      }).then((res) => {
        console.log(res.data.message)
        for (let i = 0; i < res.data.imgLinks.length; i++) {
          bus.$emit('go', res.data.imgLinks[i].imgLink, res.data.imgLinks[i].no)
        }
      })
    }
  }
}
</script>

<style>
  .body {
    text-align: center;
  }
</style>
