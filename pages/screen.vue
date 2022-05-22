<template>
  <div>
    <v-breadcrumbs :items="breadcrumbItems" class="font-weight-bold">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <v-tabs v-model="tab" class="px-6">
      <v-tab v-for="(item, i) in tabItems" :key="i" class="text-capitalize">{{ item }}</v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-tabs-items v-model="tab" :touchless="true">
      <!-- Detail Tab Item -->
      <v-tab-item :key="0">
        <ScreenDetails />
      </v-tab-item>

      <!-- Schedule Tab Item -->
      <v-tab-item :key="1">
        <ScreenSchedule />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ScreenDetails from '~/components/ScreenDetails.vue'
import ScreenSchedule from '~/components/ScreenSchedule.vue'

export default {
  name: 'IndexPage',
  components: { ScreenDetails, ScreenSchedule },
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
    tab: 1,
    tabItems: [
      "Details",
      "Schedule",
    ],
    
  }),
}
</script>

<style lang="scss">

</style>