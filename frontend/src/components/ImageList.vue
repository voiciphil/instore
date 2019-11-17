<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(imgLink, i) in imgLinks"
          v-bind:key="i"
        >
          <v-card
            class="mx-auto mt-7"
            width="350"
            v-on:click="onClick(imgLink)"
          >
            <v-img
              height="350"
              v-bind:src="imgLink"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import bus from '../bus'

export default {
  data () {
    return {
      imgLinks: []
    }
  },
  created () {
    bus.$on('init', () => {
      this.imgLinks = []
    })
    bus.$on('go', (link) => {
      this.imgLinks = link
    })
  },
  methods: {
    onClick (link) {
      window.open(link, 'image')
    }
  }
}
</script>

<style>

</style>
