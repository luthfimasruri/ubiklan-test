<template>
    <v-img src="/images/bg-pattern.svg" gradient="to bottom, rgba(255,255,255,.5), rgba(255,255,255,.5)" contain
      class="ma-6 mr-0 ma-md-12 mr-md-0 pr-6 pr-md-12 d-flex align-center" max-height="500">
      <div class="d-flex align-center justify-center flex-column flex-sm-row">
        <inline-svg class="mx-3" :width="$vuetify.breakpoint.smAndUp ? 200 : 150" height="auto" src="/404/robot.svg">
        </inline-svg>
        <div class="mx-3 text-center">
          <div class="text-h2 text-sm-h1 font-weight-medium">Oops!</div>
          <div class="text-h6 text-sm-h5 mt-4 font-weight-medium">
            {{ error.statusCode === 404 ? pageNotFound : otherError }}
          </div>
          <v-btn to="/" color="primary" large rounded class="mt-6">
            <v-icon left>mdi-arrow-left-circle</v-icon>
            GO BACK HOME
          </v-btn>
        </div>
      </div>
    </v-img>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Page Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
