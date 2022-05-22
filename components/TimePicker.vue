<template>
  <v-menu v-model="menu" offset-y :close-on-content-click="false" max-width="290px" min-width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field :label="label" append-icon="mdi-clock-outline" readonly outlined :value="localValue" v-on="on" class="rounded-lg">
      </v-text-field>
    </template>
    <v-time-picker v-model="localValue" full-width @click="menu = false"></v-time-picker>
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