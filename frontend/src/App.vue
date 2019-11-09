<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Instore</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        target="_blank"
      >
        <span>sign in</span>
      </v-btn>
      <v-btn
        text
        target="_blank"
      >
        <span>sign up</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Input/>
      <ImageList/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Input from './components/Input';
import ImageList from './components/ImageList';

export default {
  name: 'App',
  components: {
    Input,
    ImageList
  },
  data: () => ({
    //
  }),
};
</script>
