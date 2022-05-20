<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
      items: [
        {
          text: 'Videotron',
          disabled: true,
          href: '/',
        },
      ],
    }),
}
</script>
