<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Instore</span>
      </v-toolbar-title>
      <v-progress-linear
        v-bind:active="inProgress"
        height="3"
        indeterminate
        absolute
        top
      />
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          v-on:click="help"
          class="text-uppercase"
          text
        >help</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import bus from './bus';

export default {
  name: 'App',
  data() {
    return {
      inProgress: false,
    };
  },
  created() {
    bus.$on('progress', (state) => {
      this.inProgress = state;
    });
  },
  methods: {
    help() {
      window.open('https://github.com/voiciphil/instore/blob/master/README.md');
    },
  },
};
</script>
