<template>
  <v-menu v-model="menu" offset-y :close-on-content-click="false" max-width="300px" min-width="300px">
    <template v-slot:activator="{ on }">
      <v-text-field :label="label" readonly outlined :value="localValue" v-on="on" class="rounded-lg">
        <template #append>
          <v-sheet :color="localValue" height="30" width="30" class="color-palette mt-n1 rounded"></v-sheet>
        </template>
      </v-text-field>
    </template>
    <v-color-picker v-model="localValue" @click="menu = false" />
  </v-menu>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: "#ffffff",
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss">
.color-palette {
  border: 1px solid #ccc !important;
}
</style>