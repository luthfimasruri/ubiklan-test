<template>
  <v-menu v-model="menu" offset-y :close-on-content-click="false" max-width="290px" min-width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field :label="label" append-icon="mdi-calendar" readonly outlined :value="localValue" v-on="on" class="rounded-lg">
      </v-text-field>
    </template>
    <v-date-picker v-model="localValue" @click="menu = false" no-title />
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
    };
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.menu = false;
        this.$emit("input", val);
      },
    },
  },
};
</script>