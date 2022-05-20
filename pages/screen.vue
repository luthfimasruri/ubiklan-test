<template>
  <div>
    <v-breadcrumbs :items="breadcrumbItems" class="font-weight-bold">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-tabs v-model="tab" class="mx-6">
      <v-tab v-for="(item, i) in tabItems" :key="i" class="text-capitalize">{{ item }}</v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-tabs-items v-model="tab">
      <!-- Detail Tab Item -->
      <v-tab-item :key="0">
        <div class="pa-6">
          <v-row>
            <!-- Billboard Badge -->
            <v-col class="d-flex align-center">
              <div class="pa-1 green rounded mr-2" style="max-height: 0px;"></div>
              <span class="font-weight-bold body-2">Turned on</span>
            </v-col>
          </v-row>

          <v-row>
            <!-- Billboard Images -->
            <v-col cols="12" md="6">
              <v-carousel v-model="billboard" height="auto" show-arrows-on-hover :hide-delimiters="true">
                <v-carousel-item v-for="(item, i) in billboardItems" :key="i">
                  <v-img :src="`images/${item.src}`" class="rounded-lg" />
                </v-carousel-item>
              </v-carousel>
              <v-item-group v-model="billboard" mandatory class="mt-3">
                <v-sheet class="d-flex align-center" max-width="100%" style="overflow-x: auto;">
                  <v-sheet v-for="(item, i) in billboardItems" :key="i" max-width="140">
                    <v-item v-slot="{ active, toggle }" class="mr-3">
                      <v-img :class="{ 'billboard-active': active }" class="rounded-lg" @click="toggle"
                        :src="`images/${item.src}`" />
                    </v-item>
                  </v-sheet>
                </v-sheet>
              </v-item-group>
            </v-col>

            <!-- Billboard Description -->
            <v-col cols="12" md="6" class="d-flex">
              <div class="flex-grow-1">
                <div class="d-flex justify-space-between align-center">
                  <div>
                    <div class="font-weight-bold">Videotron 001</div>
                    <div>ID: UB0012341</div>
                  </div>

                </div>
                <v-card flat color="grey lighten-4 rounded-lg mt-5">
                  <v-card-text class="d-flex">
                    <div class="mr-2">
                      <v-icon size="18">mdi-map-marker</v-icon>
                    </div>
                    <div class="font-weight-bold">
                      <div class="mb-2">Mall Taman Palem, Lt 8, Cengkareng, Jakarta Barat, DKI Jakarta</div>
                      <a text class="ubi-orange--text py-2">See on Maps <v-icon color="ubi-orange">mdi-chevron-right
                        </v-icon></a>
                    </div>
                  </v-card-text>
                </v-card>
                <v-row>
                  <v-col>
                    <div class="mt-5">
                      <div class="font-weight-bold">Type</div>
                      <div>Videotron</div>
                    </div>
                    <div class="mt-5">
                      <div class="font-weight-bold">Size</div>
                      <div>40 inch</div>
                    </div>
                  </v-col>
                  <v-col>
                    <div class="mt-5">
                      <div class="font-weight-bold">Resolution</div>
                      <div>Widescreen 16:9(1920x1080)</div>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="ml-5">
                <v-btn class="rounded-lg" outlined color="ubi-orange" height="40">
                  <v-icon left>mdi-square-edit-outline</v-icon>
                  Edit
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>

      <!-- Schedule Tab Item -->
      <v-tab-item :key="1">
        <GSTC />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import GSTC from '~/components/GSTC.vue'
export default {
  name: 'IndexPage',
  components: { GSTC },
  data: () => ({
    breadcrumbItems: [
      {
        text: 'Videotron',
        disabled: false,
        href: '/',
      },
      {
        text: 'UB0022373 - Videotron 001',
        disabled: true,
        href: '/ub0022373',
      },
    ],
    tab: 0,
    tabItems: [
      "Details",
      "Schedule",
    ],
    billboard: 0,
    billboardItems: [
      {
        src: 'billboard1.jpeg',
      },
      {
        src: 'billboard2.jpeg',
      },
      {
        src: 'billboard3.jpeg',
      },
    ],
  }),
}
</script>

<style lang="scss">
.billboard-active {
  border: 2px solid #FF6F02;
  padding: 2px;
}
</style>