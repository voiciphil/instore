<template>
  <div class="body">
    <v-text-field
      class="ma-5"
      v-model="address"
      v-bind:rules="[rule]"
      v-on:click:append="getPictures"
      append-icon="mdi-send"
      outlined
      label="URL"
      hint="인스타그램 게시물의 URL을 입력하세요."
    >
    </v-text-field>
    <v-row
      class="mx-5"
    >
      <v-progress-linear
        v-bind:indeterminate="inProgress"
        v-if="inProgress"
        striped
        class="mt-n5"
        height="10"
        width="300"
      >
      </v-progress-linear>
    </v-row>
  </div>
</template>

<script>
import bus from '../../bus'

export default {
  data () {
    return {
      btn: 'GO!',
      address: '',
      valid: true,
      inProgress: false
    }
  },
  methods: {
    async getPictures () {
      if (this.address !== '') {
        bus.$emit('init')
        this.inProgress = true
        const res = await this.$axios.post('/api/image/list', { link: this.address })
        this.inProgress = false
        if (res.data.message === 'success') {
          this.valid = true
          bus.$emit('go', res.data.imgLinks)
          this.address = ''
        } else {
          this.valid = false
          this.address = ''
        }
      }
    },
    rule () {
      return this.valid || '유효한 URL을 입력하세요.'
    }
  }
}
</script>

<style>
  .body {
    text-align: center;
  }
</style>
