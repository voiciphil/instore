<template>
  <div>
    <v-progress-linear
      v-bind:indeterminate="inProgress"
      height="2"
      color="grey"
    />
  </div>
</template>

<script>
import bus from '../../bus'

export default {
  data () {
    return {
      inProgress: false
    }
  },
  created () {
    bus.$on('progress', (state) => {
      this.inProgress = state
    })
  }
}
</script>

<style>

</style>
