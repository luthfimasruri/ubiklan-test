<template>
  <div class="pt-6 pl-6">
    <v-row>
      <!-- Schedule Date Controller -->
      <v-col class="d-flex align-center">
        <v-btn class="rounded-lg" outlined color="ubi-grey" height="40">
          Today
        </v-btn>
        <div class="d-flex align-center mx-6">
          <v-btn icon @click.stop="month === 0 ? (month = months.length - 1) : month--">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-window v-model="month" class="mx-3">
            <v-window-item v-for="(month, i) in months" :key="i" :value="i">
              {{ month }} {{ $dayjs().year() }}
            </v-window-item>
          </v-window>
          <v-btn icon @click.stop="month === months.length - 1 ? (month = 0) : month++">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="grid-layout mt-5">
      <div class="grid-corner">
      </div>
      <!-- Side Date -->
      <div class="grid-side py-4">
        <div v-for="(day, i) in 31" :key="i">
          <v-card flat width="60" height="60" class="rounded-circle d-flex align-center justify-center flex-column">
            <div class="body-2">{{ getDayOfWeek($dayjs().date(i).day()) }}</div>
            <div class="font-weight-bold text-h6" style="line-height: 1">
              {{ day }}
            </div>
          </v-card>
        </div>
      </div>

      <!-- Header Hour -->
      <div class="grid-header px-4">
        <v-card flat v-for="(_, i) in 24" :key="i" class="font-weight-bold my-2">
          {{ i < 10 ? `0${i}` : i }}:00 </v-card>
      </div>

      <!-- Data Timeliem -->
      <div class="grid-data py-4 px-4">
        <v-card flat v-for="(item, i) in dataItems" :key="i" :color="item.data.color" :style="generateStyle(item)"
          class="px-3 py-2 white--text rounded-lg" :elevation="hover ? 16 : 0">
          <div class="font-weight-bold">{{ item.data.name }}</div>
          <div>
            {{ item.hour < 10 ? `0${item.hour}` : item.hour }}:00 - {{ item.toHour < 10 ? `0${item.toHour}` :
                item.toHour
            }}:00 </div>
        </v-card>
        <v-btn class="xxx" v-if="hover">HHHHH</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weeks: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
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
        // Row 0
        {
          hour: 0,
          toHour: 5,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        {
          hour: 5,
          toHour: 8,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#60dd91",
          },
        },
        {
          hour: 8,
          toHour: 15,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#6abff5",
          },
        },
        {
          hour: 15,
          toHour: 24,
          date: 0,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        // Row 1
        {
          hour: 0,
          toHour: 4,
          date: 1,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        {
          hour: 4,
          toHour: 7,
          date: 1,
          data: {
            name: "Schedule #001",
            color: "#60dd91",
          },
        },
        {
          hour: 7,
          toHour: 10,
          date: 1,
          data: {
            name: "Schedule #001",
            color: "#6abff5",
          },
        },
        {
          hour: 10,
          toHour: 24,
          date: 1,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        // Row 2
        {
          hour: 0,
          toHour: 3,
          date: 2,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        {
          hour: 3,
          toHour: 6,
          date: 2,
          data: {
            name: "Schedule #001",
            color: "#60dd91",
          },
        },
        {
          hour: 6,
          toHour: 8,
          date: 2,
          data: {
            name: "Schedule #001",
            color: "#6abff5",
          },
        },
        {
          hour: 8,
          toHour: 24,
          date: 2,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        // Row 3
        {
          hour: 0,
          toHour: 3,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        {
          hour: 3,
          toHour: 5,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#60dd91",
          },
        },
        {
          hour: 6,
          toHour: 8,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#6abff5",
          },
        },
        {
          hour: 8,
          toHour: 24,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        // Row 3
        {
          hour: 0,
          toHour: 3,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        {
          hour: 3,
          toHour: 5,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#60dd91",
          },
        },
        {
          hour: 5,
          toHour: 8,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#6abff5",
          },
        },
        {
          hour: 8,
          toHour: 24,
          date: 3,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        // Row 4
        {
          hour: 1,
          toHour: 4,
          date: 4,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
        {
          hour: 4,
          toHour: 8,
          date: 4,
          data: {
            name: "Schedule #001",
            color: "#60dd91",
          },
        },
        {
          hour: 9,
          toHour: 19,
          date: 4,
          data: {
            name: "Schedule #001",
            color: "#6abff5",
          },
        },
        {
          hour: 19,
          toHour: 24,
          date: 4,
          data: {
            name: "Schedule #001",
            color: "#bd78ef",
          },
        },
      ],
    };
  },
  mounted() {
    console.log(this.$dayjs().date(1).format("MMMM"));
  },
  methods: {
    getDayOfWeek(index) {
      return this.weeks[index].substr(0, 3);
    },
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
  grid-template-columns: 70px minmax(0, 1fr);
  grid-template-rows: 40px minmax(0, 1fr);
}

.grid-corner {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
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
