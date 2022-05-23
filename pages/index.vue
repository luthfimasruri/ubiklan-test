<template>
  <div class="pa-3">
    <v-row justify="center" align="center">
      <v-col>
        <v-breadcrumbs :items="items" class="font-weight-bold px-3 py-3">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <v-img
          src="/images/bg-pattern.svg"
          gradient="to bottom, rgba(255,255,255,.5), rgba(255,255,255,.5)"
          contain
          class="ma-6 mr-0 ma-md-12 mr-md-0 pr-6 pr-md-12 d-flex align-center"
          max-height="500"
        >
          <div class="d-flex align-center justify-center flex-column">
            <v-img
              class="mx-3"
              :width="$vuetify.breakpoint.smAndUp ? 220 : 170"
              aspect-ratio="1"
              src="/icon.png"
              eager
            >
              <template #placeholder>
                <v-row class="fill-height" align="center" justify="center">
                  <v-progress-circular indeterminate></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="mx-3 my-5 text-center">
              <div class="text-h3 text-sm-h2 font-weight-medium">
                Welcome To Ubiklan
              </div>
              <div class="text-h6 text-sm-h5 mt-4 font-weight-medium">
                We innovate ways that put technology to out-of-home ads.
              </div>
              <v-btn to="/screen" color="primary" large rounded class="mt-6">
                GO TO SCREEN PAGE
                <inline-svg
                  width="18"
                  height="18"
                  class="my-2 ml-2"
                  src="/icons/screen-icon.svg"
                />
              </v-btn>
            </div>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    items: [
      {
        text: 'Overview',
        disabled: true,
        href: '/',
      },
    ],
  }),
}
</script>
