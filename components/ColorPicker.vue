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
          <v-sheet
            :color="localValue"
            height="30"
            width="30"
            class="color-palette mt-n1 rounded"
          ></v-sheet>
        </template>
      </v-text-field>
    </template>
    <v-sheet>
      <v-color-picker v-model="localValue" flat> </v-color-picker>
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
      default: '#ffffff',
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

<style lang="scss">
.color-palette {
  border: 1px solid #ccc !important;
}
</style>
