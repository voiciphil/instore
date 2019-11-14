<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col
          v-for="imgLink in imgLinks"
          v-bind:key="imgLink.no"
        >
          <v-card
            class="mx-auto mt-7"
            width="350"
            v-on:click="onClick(imgLink.link)"
          >
            <v-img
              height="350"
              v-bind:src="imgLink.link"
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
    bus.$on('go', (link, no) => {
      this.imgLinks.push({
        link: link,
        no: no
      })
      this.len = this.imgLinks.length
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
