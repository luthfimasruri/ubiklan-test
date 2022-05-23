<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="localValue"
    transition="scale-transition"
    offset-y
    nudge-bottom="-30px"
    max-width="290px"
    min-width="auto"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="localValue"
        :label="label"
        outlined
        readonly
        hint="Format: YYYY-MM-DD"
        class="rounded-lg mb-2"
        v-bind="attrs"
        v-on="on"
      >
        <template #append>
          <v-icon class="pr-1">mdi-calendar</v-icon>
        </template>
      </v-text-field>
    </template>
    <v-sheet>
      <v-date-picker v-model="localValue" scrollable> </v-date-picker>
      <v-divider></v-divider>
      <div class="d-flex pa-2">
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(localValue)"> OK </v-btn>
      </div>
    </v-sheet>
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
        this.$emit('input', val)
      },
    },
  },
}
</script>
