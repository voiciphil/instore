<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Instore</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-on:click="move"
          text
          width="100"
        >
          {{ help ? 'home' : 'help' }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    help: false
  }),
  methods: {
    move () {
      if (this.help) {
        this.help = false
        this.$router.push('/')
      } else {
        this.help = true
        this.$router.push('/help')
      }
    }
  }
}
</script>
