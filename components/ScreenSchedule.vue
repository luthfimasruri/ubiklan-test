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
      <div class="grid-corner"></div>
      <!-- Side Date -->
      <div class="grid-side">
        <v-item-group v-model="day" class="grid-side-content py-4">
          <v-sheet v-for="(day, i) in 31" :key="i" class="d-flex align-center">
            <v-item v-slot="{ active, toggle }" class="mr-3 rounded-circle" color="transparent">
              <v-card width="55" height="55" flat :class="active ? 'ubi-orange white--text' : ''" @click="toggle"
                class="rounded-circle d-flex align-center justify-center flex-column text-center">
                <div>
                  <div class="body-2">{{ getDayOfWeek($dayjs().date(i).day()) }}</div>
                  <div class="font-weight-bold body-1" style="line-height: 1">
                    {{ day }}
                  </div>
                </div>
              </v-card>
            </v-item>
          </v-sheet>
        </v-item-group>
      </div>

      <!-- Header Hour -->
      <div class="grid-header">
        <div class="grid-header-content px-4" ref="gridHeaderContent">
          <v-card flat v-for="(_, i) in 24" :key="i" class="font-weight-bold my-2">
            {{ i < 10 ? `0${i}` : i }}:00 </v-card>
        </div>
      </div>

      <!-- Data Timeliem -->
      <div class="grid-data">
        <div class="grid-data-content py-4 px-4" ref="gridDataContent">
          <v-card flat v-for="(item, i) in dataItems" :key="i" :color="item.data.color" :style="generateStyle(item)"
            class="px-3 py-2 white--text rounded-lg">
            <div class="font-weight-bold">{{ item.data.name }}</div>
            <div>
              {{ item.hour < 10 ? `0${item.hour}` : item.hour }}:00 - {{ item.toHour < 10 ? `0${item.toHour}` :
                  item.toHour
              }}:00 </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: 1,
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
        { date: 0, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 0, hour: 3, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 0, hour: 5, toHour: 10, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 0, hour: 10, toHour: 17, data: { name: "Schedule #004", color: "#dd8c61" } },
        { date: 0, hour: 17, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 1
        { date: 1, hour: 0, toHour: 2, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 1, hour: 2, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 1, hour: 5, toHour: 8, data: { name: "Schedule #003", color: "#dd8c61" } },
        { date: 1, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 1, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 2
        { date: 2, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 2, hour: 4, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 2, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 2, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 3
        { date: 3, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 3, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 3, hour: 6, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 3, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 4
        { date: 4, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#ff7675" } },
        { date: 4, hour: 3, toHour: 5, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 4, hour: 5, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 4, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 5
        { date: 5, hour: 1, toHour: 5, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 5, hour: 5, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 5, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 5, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 6
        { date: 6, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 6, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 6, hour: 6, toHour: 11, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 6, hour: 11, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 6, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 7
        { date: 7, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 7, hour: 3, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 7, hour: 5, toHour: 10, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 7, hour: 10, toHour: 17, data: { name: "Schedule #004", color: "#dd8c61" } },
        { date: 7, hour: 17, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 8
        { date: 8, hour: 0, toHour: 2, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 8, hour: 2, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 8, hour: 5, toHour: 8, data: { name: "Schedule #003", color: "#dd8c61" } },
        { date: 8, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 8, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 9
        { date: 9, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#fdcb6e" } },
        { date: 9, hour: 4, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 9, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 9, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 10
        { date: 10, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 10, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 10, hour: 6, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 10, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 11
        { date: 11, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#ff7675" } },
        { date: 11, hour: 3, toHour: 5, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 11, hour: 5, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 11, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 12
        { date: 12, hour: 1, toHour: 5, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 12, hour: 5, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 12, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 12, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 13
        { date: 13, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 13, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 13, hour: 6, toHour: 11, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 13, hour: 11, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 13, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 14
        // Row 15
        { date: 15, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 15, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 15, hour: 6, toHour: 11, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 15, hour: 11, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 15, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 16
        { date: 16, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 16, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 16, hour: 6, toHour: 11, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 16, hour: 11, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 16, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 17
        { date: 17, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 17, hour: 3, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 17, hour: 5, toHour: 10, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 17, hour: 10, toHour: 17, data: { name: "Schedule #004", color: "#dd8c61" } },
        { date: 17, hour: 17, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 18
        { date: 18, hour: 0, toHour: 2, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 18, hour: 2, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 18, hour: 5, toHour: 8, data: { name: "Schedule #003", color: "#dd8c61" } },
        { date: 18, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 18, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 19
        { date: 19, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#fdcb6e" } },
        { date: 19, hour: 4, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 19, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 19, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 20
        { date: 20, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 20, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 20, hour: 6, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 20, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 21
        { date: 21, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#ff7675" } },
        { date: 21, hour: 3, toHour: 5, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 21, hour: 5, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 21, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 22
        { date: 22, hour: 1, toHour: 5, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 22, hour: 5, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 22, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 22, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 23
        { date: 23, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 23, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 23, hour: 6, toHour: 11, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 23, hour: 11, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 23, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 25
        { date: 25, hour: 0, toHour: 4, data: { name: "Schedule #001", color: "#00cec9" } },
        { date: 25, hour: 4, toHour: 6, data: { name: "Schedule #002", color: "#bd78ef" } },
        { date: 25, hour: 6, toHour: 11, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 25, hour: 11, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 25, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 26
        { date: 26, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 26, hour: 3, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 26, hour: 5, toHour: 10, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 26, hour: 10, toHour: 17, data: { name: "Schedule #004", color: "#dd8c61" } },
        { date: 26, hour: 17, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 27
        { date: 27, hour: 0, toHour: 2, data: { name: "Schedule #001", color: "#bd78ef" } },
        { date: 27, hour: 2, toHour: 5, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 27, hour: 5, toHour: 8, data: { name: "Schedule #003", color: "#dd8c61" } },
        { date: 27, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 27, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 29
        { date: 29, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#fdcb6e" } },
        { date: 29, hour: 4, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 29, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 29, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
        // Row 30
        { date: 30, hour: 0, toHour: 3, data: { name: "Schedule #001", color: "#fdcb6e" } },
        { date: 30, hour: 4, toHour: 8, data: { name: "Schedule #002", color: "#60dd91" } },
        { date: 30, hour: 8, toHour: 15, data: { name: "Schedule #003", color: "#6abff5" } },
        { date: 30, hour: 15, toHour: 24, data: { name: "Schedule #004", color: "#bd78ef" } },
      ],
      isMouseOverGridHeader: false,
      isMouseOverGridData: false,
    };
  },
  mounted() {
    this.$refs.gridHeaderContent.addEventListener("mouseleave",  ()=> {
      this.isMouseOverGridHeader = false
    }, false);
    this.$refs.gridHeaderContent.addEventListener("mouseover",  ()=> {
      this.isMouseOverGridHeader = true
    }, false);
    this.$refs.gridHeaderContent.addEventListener("scroll", () => {
      if(this.isMouseOverGridHeader) {
        this.$refs.gridDataContent.scrollLeft = this.$refs.gridHeaderContent.scrollLeft;
      }
    });

    this.$refs.gridDataContent.addEventListener("mouseleave",  ()=> {
      this.isMouseOverGridData = false
    }, false);
    this.$refs.gridDataContent.addEventListener("mouseover",  ()=> {
      this.isMouseOverGridData = true
    }, false);
    this.$refs.gridDataContent.addEventListener("scroll", () => {
      if(this.isMouseOverGridData) {
        this.$refs.gridHeaderContent.scrollLeft = this.$refs.gridDataContent.scrollLeft;
      }
    });
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
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.grid-header {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  position: relative;
}

.grid-header-content {
  display: grid;
  grid-template-columns: repeat(24, 140px);
  grid-column-gap: 5px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;

  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
  }
}

.grid-side {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}

.grid-side-content {
  display: grid;
  grid-template-rows: repeat(30, 70px);
  grid-row-gap: 20px;
  border-right: 1px solid #ccc;
}

.grid-data {
  grid-column: 2 / 3;
  grid-row: 2 / auto;
}

.grid-data-content {
  display: grid;
  grid-template-columns: repeat(24, 140px);
  grid-template-rows: repeat(30, 70px);
  grid-row-gap: 20px;
  grid-column-gap: 5px;
  overflow-x: scroll;
}
</style>
