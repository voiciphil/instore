<template>
  <div>
    <v-row dense>
      <v-col
        v-for="imgLink in imgLinks"
        v-bind:key="imgLink.no"
      >
        <v-card
          class="mx-auto"
          max-width="350"
          v-on:click="onClick(imgLink.link)"
        >
          <v-img
            v-bind:src="imgLink.link"
            height="350"
          >
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgLinks: []
    }
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
