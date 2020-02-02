<template>
  <div class="body">
    <v-text-field
      class="ma-5"
      v-model="address"
      v-bind:rules="[rule]"
      v-on:click:append="getPictures"
      v-on:keyup.enter="getPictures"
      append-icon="mdi-send"
      outlined
      label="URL"
      hint="인스타그램 게시물의 URL을 입력하세요."
    />
  </div>
</template>

<script>
import bus from '../../bus';
import service from '../../service';

export default {
  data() {
    return {
      btn: 'GO!',
      address: '',
      valid: true,
      inProgress: false,
    };
  },
  methods: {
    async getPictures() {
      if (this.address !== '') {
        bus.$emit('init');
        bus.$emit('progress', true);
        const res = await service.getImages(this.address);
        bus.$emit('progress', false);
        if (res.message === 'success') {
          this.valid = true;
          bus.$emit('go', res.imgLinks);
          this.address = '';
        } else {
          this.valid = false;
          this.address = '';
        }
      }
    },
    rule() {
      return this.valid || '유효한 URL을 입력하세요.';
    },
  },
};
</script>

<style>
  .body {
    text-align: center;
  }
</style>
