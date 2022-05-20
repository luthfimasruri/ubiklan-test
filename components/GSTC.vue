<template>
  <div class="pa-6 pr-0">
    <v-row>
      <!-- Schedule Date Controller -->
      <v-col class="d-flex align-center">
        <v-btn class="rounded-lg" outlined color="ubi-grey" height="40">
          Today
        </v-btn>
        <div class="d-flex align-center mx-6">
          <v-btn
            icon
            @click.stop="month === 0 ? (month = months.length - 1) : month--"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-window v-model="month" class="mx-3">
            <v-window-item v-for="(month, i) in months" :key="i" :value="i">
              {{ month }} {{ $dayjs().year() }}
            </v-window-item>
          </v-window>
          <v-btn
            icon
            @click.stop="month === months.length - 1 ? (month = 0) : month++"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="grid-layout mt-2">
      <!-- Side Date -->
      <div class="grid-side">
        <div v-for="(day, i) in 30" :key="i">
          <v-card
            flat
            width="60"
            height="60"
            class="rounded-circle d-flex align-center justify-center flex-column"
          >
            <div class="body-2">Mon</div>
            <div class="font-weight-bold text-h6" style="line-height: 1">{{i}}</div>
          </v-card>
        </div>
      </div>

      <!-- Header Hour -->
      <div class="grid-header py-4 px-4">
        <v-card flat v-for="(_, i) in 24" :key="i" class="font-weight-bold">
          {{ i < 10 ? `0${i}` : i }}:00
        </v-card>
      </div>

      <!-- Data Timeliem -->
      <div class="grid-data py-4 px-4">
        <v-card
          flat
          v-for="(item, i) in dataItems"
          :key="i"
          :color="item.data.color"
          :style="generateStyle(item)"
          class="px-3 py-2 white--text rounded-lg"
        >
          <div class="font-weight-bold">{{ item.data.name }}</div>
          <div>
            {{ item.hour < 10 ? `0${item.hour}` : item.hour }}:00 -
            {{ item.toHour < 10 ? `0${item.toHour}` : item.toHour }}:00
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GSTC",
  data() {
    return {
      month: this.$dayjs().month(),
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      dataItems: [
        // Row 1
        {
          hour: 0,
          toHour: 3,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        {
          hour: 3,
          toHour: 5,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#60dd91",
          },
        },
        {
          hour: 6,
          toHour: 8,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#6abff5",
          },
        },
        {
          hour: 8,
          toHour: 24,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
      ],
    };
  },
  mounted() {
    console.log(this.$dayjs().month());
  },
  methods: {
    generateStyle(item) {
      let row = item.date + 1;
      let colStart = item.hour + 1;
      let colEnd = item.toHour + 1;
      return {
        "grid-row": `${row}/auto`,
        "grid-column": `${colStart}/${colEnd}`,
      };
    },
  },
};
</script>

<style lang="scss">
.grid-layout {
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr);
  grid-template-rows: 50px minmax(0, 1fr);
}

.grid-header {
  display: grid;
  grid-template-columns: repeat(24, 140px);
  grid-column-gap: 5px;
  overflow-x: visible;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  border-bottom: 1px solid #ccc;
}

.grid-side {
  display: grid;
  grid-template-rows: repeat(30, 1fr);
  grid-row-gap: 20px;
  border-right: 1px solid #ccc;
  grid-row: 2/3;
  grid-column: 1 / 2;
}

.grid-data {
  display: grid;
  grid-template-columns: repeat(24, 140px);
  grid-template-rows: repeat(30, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 5px;
  overflow-x: auto;
  grid-column: 2 / 3;
  grid-row: 2 / auto;
}
</style>
