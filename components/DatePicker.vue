<template>
  <v-menu
    v-model="menu"
    offset-y
    :close-on-content-click="false"
    nudge-bottom="-30px"
    max-width="290px"
    min-width="290px"
  >
    <template #activator="{ on }">
      <v-text-field
        v-model="localValue"
        :label="label"
        outlined
        hint="Format: YYYY-MM-DD"
        class="rounded-lg mb-2"
      >
        <template #append>
          <v-icon class="pr-1" v-on="on">mdi-calendar</v-icon>
        </template>
      </v-text-field>
    </template>
    <v-date-picker v-model="localValue" no-title @click="menu = false" />
  </v-menu>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: new Date().toISOString().substr(0, 10),
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(val) {
        this.menu = false
        this.$emit('input', val)
      },
    },
  },
}
</script>
