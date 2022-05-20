<template>
  <v-app light>
    <!-- App Navigation -->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <div class="d-flex align-center" :class="miniVariant ? 'px-2 py-7' : 'pa-5'">
        <div style="max-width: 100%;">
          <v-img width="64" max-width="100%" src="ubi-screen-logo.svg" contain alt="Ubi Screen Logo" />
        </div>
        <h1 class="ml-2 ubi-grey--text text--darken-2" :class="{ 'd-none': miniVariant }">UbiScreen</h1>
      </div>
      <v-list nav>
        <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to" router exact class="ubi-grey--text"
          active-class="ubi-orange ubi-white--text">
          <v-list-item-action>
            <inline-svg width="24" height="24" :src="`icons/${item.icon}`" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar :clipped-left="clipped" fixed app elevation="0" height="80" outlined>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant" class="d-none d-sm-block">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <div class="x-search mx-4 flex-grow-1 rounded-lg">
        <v-autocomplete height="40" background-color="transparent" solo flat dense v-model="select" :loading="loading"
          :items="items" :search-input.sync="search" cache-items class="pl-0 rounded-r-lg rounded-l-0" hide-details
          append-icon="" placeholder="Search screen, media, playlist or schedule">
          <template #prepend>
            <div class="ubi-grey lighten-4 px-2 ubi-grey--text rounded-l-lg">
              <inline-svg width="24" height="24" class="my-2" src="icons/search-icon.svg" />
            </div>
          </template>
        </v-autocomplete>
      </div>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <inline-svg src="icons/bell-icon.svg" />
      </v-btn>
      <v-btn text rounded height="40" href="" class="d-flex text-left px-0 ml-2">
        <v-avatar color="ubi-orange" size="40">
          <span class="white--text text-h6">J</span>
        </v-avatar>
        <div class="d-none d-md-flex align-center">
          <div class="mx-2">
            <div class="font-weight-bold">John Doe</div>
            <div class="caption">Admin</div>
          </div>
          <v-icon class="mr-2"> mdi-chevron-down </v-icon>
        </div>
      </v-btn>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>

    <!-- App Content -->
    <v-main>
      <Nuxt />
    </v-main>

    <!-- Right Drawer -->
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Footer -->
    <v-footer :absolute="!fixed" app>
      <span>Copyright &copy; {{ new Date().getFullYear() }} Ahmad Luthfi Masruri</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      menuItems: [
        {
          icon: 'overview-icon.svg',
          title: 'Overview',
          to: '/'
        },
        {
          icon: 'screen-icon.svg',
          title: 'Screen',
          to: '/screen'
        },
        {
          icon: 'media-icon.svg',
          title: 'Media',
          to: '/media'
        },
        {
          icon: 'playlist-icon.svg',
          title: 'Playlist',
          to: '/playlist'
        },
        {
          icon: 'schedule-icon.svg',
          title: 'Schedule',
          to: '/schedule'
        },
        {
          icon: 'statistics-icon.svg',
          title: 'Statistics',
          to: '/statistics'
        },
        {
          icon: 'payouts-icon.svg',
          title: 'Payouts',
          to: '/payouts'
        },
        {
          icon: 'settings-icon.svg',
          title: 'Settings',
          to: '/settings'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',

      // App Bar Data
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
    }
  }
}
</script>

<style lang="scss">
svg {
  fill: currentColor !important;
}

.x-search {
  border: 1px solid rgba($color: #000000, $alpha: 0.12);

  .v-input__prepend-outer {
    margin: 0 !important;
    height: 40px;
    border-right: none;
    border-radius: 8px 0 0 8px;
  }
}
</style>
