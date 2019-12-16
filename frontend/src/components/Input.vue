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
      class="mb-10"
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
    async getPictures () {
      bus.$emit('init')
      const link = this.address
      this.address = ''
      const res = await this.$axios.post('/api/image/list', { link })
      bus.$emit('go', res.data.imgLinks)
    }
  }
}
</script>

<style>
  .body {
    text-align: center;
  }
</style>
