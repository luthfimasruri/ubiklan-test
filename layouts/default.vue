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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar :clipped-left="clipped" fixed app elevation="0" height="80" outlined>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon class="d-none d-sm-block" @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <div class="search mx-2 mx-sm-4 flex-grow-1 rounded-lg">
        <v-autocomplete
          v-model="model"
          :loading="loading"
          :items="searchItems"
          :search-input.sync="search"
          solo
          flat
          dense
          cache-items
          hide-details
          height="40"
          append-icon=""
          background-color="transparent"
          class="pl-0 rounded-r-lg rounded-l-0"
          placeholder="Search screen, media, playlist or schedule"
          :no-data-text="
            searchEntries.length
              ? 'No results found'
              : 'Search for screen, media, playlist or schedule'
          "
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
        <v-badge color="primary" offset-x="10" offset-y="8" dot bordered>
          <inline-svg width="24" height="24" src="/icons/bell-icon.svg" />
        </v-badge>
      </v-btn>

      <!-- Menu Profile -->
      <v-menu offset-y z-index="999" nudge-bottom="8" rounded="lg">
        <template #activator="{ on, attrs, value }">
          <v-hover v-slot="{ hover }">
            <button
              class="d-flex ml-1 ml-sm-2 pa-1 text-left rounded-pill"
              :class="hover || value ? 'grey lighten-3' : ''"
              v-bind="attrs"
              v-on="on"
            >
              <v-avatar color="ub-orange" size="40">
                <span class="white--text text-h6">J</span>
              </v-avatar>
              <div class="d-none d-md-flex align-center">
                <div class="mx-2">
                  <div class="font-weight-bold">John Doe</div>
                  <div class="text-body-2" style="line-height: 1">Admin</div>
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
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
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
      model: null,
      search: null,
      searchEntries: [],
      textLimit: 70,
    }
  },
  computed: {
    searchItems() {
      return this.searchEntries.map((entry, index) => {
        const title =
          entry.title.length > this.textLimit
            ? entry.title.slice(0, this.textLimit) + '...'
            : entry.title
        return { value: index, text: title }
      })
    },
  },
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.searchItems.length > 0) return

      // Items have already been requested
      if (this.loading) return

      this.loading = true

      // Lazily load input items
      this.$axios
        .get('https://gorest.co.in/public/v2/posts')
        .then((res) => {
          this.searchEntries = res.data || []
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  mounted() {
    this.drawer = this.$vuetify.breakpoint.lgAndUp
    this.miniVariant = this.$vuetify.breakpoint.smAndDown ? false : this.miniVariant
  },
}
</script>

<style lang="scss">
svg {
  fill: currentColor !important;
}

.search {
  border: 1px solid rgba($color: #000000, $alpha: 0.12);
  .v-input__prepend-outer {
    margin: 0 !important;
    height: 40px;
    border-right: none;
    border-radius: 8px 0 0 8px;
  }
}
</style>
