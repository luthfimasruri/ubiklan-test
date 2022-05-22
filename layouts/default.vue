<template>
  <v-app light>
    <!-- App Navigation -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <nuxt-link
        to="/"
        class="d-flex align-center text-decoration-none"
        :class="miniVariant ? 'px-2 py-7' : 'pa-5'"
      >
        <div style="max-width: 100%">
          <v-img
            width="64"
            max-width="100%"
            src="/ub-screen-logo.svg"
            contain
            alt="Ubi Screen Logo"
          />
        </div>
        <h1
          class="ml-2 ub-grey--text text--darken-2"
          :class="{ 'd-none': miniVariant }"
        >
          UbiScreen
        </h1>
      </nuxt-link>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          router
          exact
          class="ub-grey--text"
          active-class="ub-orange ub-white--text"
        >
          <v-list-item-action>
            <inline-svg width="24" height="24" :src="`/icons/${item.icon}`" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      elevation="0"
      height="80"
      outlined
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
        class="d-none d-sm-block"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <div class="x-search mx-2 mx-sm-4 flex-grow-1 rounded-lg">
        <v-autocomplete
          height="40"
          background-color="transparent"
          solo
          flat
          dense
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="pl-0 rounded-r-lg rounded-l-0"
          hide-details
          append-icon=""
          placeholder="Search screen, media, playlist or schedule"
        >
          <template #prepend>
            <div class="ub-grey lighten-4 px-2 ub-grey--text rounded-l-lg">
              <inline-svg
                width="24"
                height="24"
                class="my-2"
                src="/icons/search-icon.svg"
              />
            </div>
          </template>
        </v-autocomplete>
      </div>
      <v-spacer />

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <inline-svg width="24" height="24" src="/icons/bell-icon.svg" />
      </v-btn>

      <!-- Menu Profile -->
      <v-menu offset-y z-index="999" nudge-bottom="8" rounded="lg">
        <template v-slot:activator="{ on, attrs, value }">
          <v-hover v-slot="{ hover }">
            <button
              v-on="on"
              v-bind="attrs"
              class="d-flex ml-1 ml-sm-2 pa-1 text-left rounded-pill"
              :class="hover || value ? 'grey lighten-3' : ''"
            >
              <v-avatar color="ub-orange" size="40">
                <span class="white--text text-h6">J</span>
              </v-avatar>
              <div class="d-none d-md-flex align-center">
                <div class="mx-2">
                  <div class="font-weight-bold">John Doe</div>
                  <div class="body-2" style="line-height: 1">Admin</div>
                </div>
                <v-icon class="mr-2">
                  mdi-{{ `chevron-${value ? 'up' : 'down'}` }}
                </v-icon>
              </div>
            </button>
          </v-hover>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar color="ub-orange">
                <span class="white--text text-h6">J</span>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Doe</v-list-item-title>
                <v-list-item-subtitle>Admin</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon>mdi-square-edit-outline</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>

          <v-list class="py-0">
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in menuProfile" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="menu = false">
              Log Out <v-icon right>mdi-logout</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
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
          <v-list-item-title class="font-weight-bold text-h6"
            >Notification</v-list-item-title
          >
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Footer -->
    <!-- <v-footer :absolute="!fixed" app>
      <span>Copyright &copy; {{ new Date().getFullYear() }} Ahmad Luthfi Masruri</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      menuItems: [
        {
          icon: 'overview-icon.svg',
          title: 'Overview',
          to: '/',
        },
        {
          icon: 'screen-icon.svg',
          title: 'Screen',
          to: '/screen',
        },
        {
          icon: 'media-icon.svg',
          title: 'Media',
          to: '/media',
        },
        {
          icon: 'playlist-icon.svg',
          title: 'Playlist',
          to: '/playlist',
        },
        {
          icon: 'schedule-icon.svg',
          title: 'Schedule',
          to: '/schedule',
        },
        {
          icon: 'statistics-icon.svg',
          title: 'Statistics',
          to: '/statistics',
        },
        {
          icon: 'payouts-icon.svg',
          title: 'Payouts',
          to: '/payouts',
        },
        {
          icon: 'settings-icon.svg',
          title: 'Settings',
          to: '/settings',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      // Profile
      menuProfile: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
        },
        {
          icon: 'mdi-calendar-check-outline',
          text: 'Calendar',
        },
        {
          icon: 'mdi-cog-outline',
          text: 'Setting',
        },
      ],
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
  },
  mounted() {
    this.drawer = this.$vuetify.breakpoint.lgAndUp
    this.miniVariant = this.$vuetify.breakpoint.smAndDown
      ? false
      : this.miniVariant
  },
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
