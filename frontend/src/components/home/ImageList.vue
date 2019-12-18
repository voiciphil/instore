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
            v-on:click="onClick(i)"
          >
            <v-img
              height="350"
              v-bind:src="imgLink.imgLink"
            >
            </v-img>
            <v-btn
              color="white"
              fab
              top
              left
              small
              absolute
              class="mt-9 disabled"
            >
              <v-icon>{{ imgLink.isVideo ? 'mdi-video' : 'mdi-image' }}</v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import bus from '../../bus'

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
    onClick (i) {
      if (this.imgLinks[i].isVideo) {
        window.open(this.imgLinks[i].videoLink)
      } else {
        window.open(this.imgLinks[i].imgLink)
      }
    }
  }
}
</script>

<style scoped>
.disabled {
  pointer-events: none;
}
</style>
