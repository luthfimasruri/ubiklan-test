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
        hint="Format: HH:mm"
        class="rounded-lg mb-2"
      >
        <template #append>
          <v-icon class="pr-1" v-bind="attrs" v-on="on">mdi-clock-outline</v-icon>
        </template>
      </v-text-field>
    </template>
    <v-sheet>
      <v-time-picker v-model="localValue"></v-time-picker>
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
      default: '00:00',
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
