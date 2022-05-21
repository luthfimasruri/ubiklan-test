<template>
  <div class="pt-3 pl-3">
    <v-container>
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
    </v-container>
    <div class="grid-layout pt-3 pl-3">
      <div class="layout-corner"></div>
      <!-- Side Date -->
      <div class="layout-days">
        <v-item-group v-model="day" class="grid-days py-4">
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
      <div class="layout-time">
        <div class="grid-time px-4" ref="gridTime">
          <v-card flat v-for="(_, i) in 24" :key="i" class="font-weight-bold my-2">
            {{ i < 10 ? `0${i}` : i }}:00 </v-card>
        </div>
      </div>

      <!-- Data Timeliem -->
      <div class="layout-timeline">
        <div class="grid-timeline py-4 px-4" ref="gridTimeline">
          <v-hover v-for="(item, i) in dataTimeline" :key="i" v-slot="{ hover }" :style="generateStyle(item)">
            <v-card flat :color="item.bgColor" :elevation="hover ? 4 : 0" class="px-3 py-2 white--text rounded-lg"
              @click="onClickTimeline(item)">
              <div class="font-weight-bold">{{ item.title }}</div>
              <div>
                {{ item.startTime < 10 ? `0${item.startTime}` : item.startTime }}:00 - {{ item.endTime < 10 ?
                    `0${item.endTime}` : item.endTime
                }}:00 </div>
            </v-card>
          </v-hover>
        </div>
      </div>
    </div>

    <!-- Dialog Form Edit Timeline -->
    <v-dialog v-model="showFormEditTimeline" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Timeline</span>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-container>
            <v-text-field v-model.number="selectedDataTimeline.startTime" type="number" outlined label="Hour"
              hint="Number 0-23" required></v-text-field>
            <v-text-field v-model.number="selectedDataTimeline.endTime" type="number" outlined label="To Hour"
              hint="Number 0-23" required></v-text-field>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" text @click="showFormEditTimeline = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      dataTimeline: [
        // Row 0
        { date: 0, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 0, startTime: 3, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 0, startTime: 5, endTime: 10, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 0, startTime: 10, endTime: 17, title: "Schedule #004", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 0, startTime: 17, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 1
        { date: 1, startTime: 0, endTime: 2, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 1, startTime: 2, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 1, startTime: 5, endTime: 8, title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 1, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 1, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 2
        { date: 2, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 2, startTime: 4, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 2, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 2, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 3
        { date: 3, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 3, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 3, startTime: 6, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 3, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 4
        { date: 4, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
        { date: 4, startTime: 3, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 4, startTime: 5, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 4, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 5
        { date: 5, startTime: 1, endTime: 5, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 5, startTime: 5, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 5, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 5, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 6
        { date: 6, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 6, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 6, startTime: 6, endTime: 11, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 6, startTime: 11, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 6, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 7
        { date: 7, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 7, startTime: 3, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 7, startTime: 5, endTime: 10, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 7, startTime: 10, endTime: 17, title: "Schedule #004", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 7, startTime: 17, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 8
        { date: 8, startTime: 0, endTime: 2, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 8, startTime: 2, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 8, startTime: 5, endTime: 8, title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 8, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 8, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 9
        { date: 9, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
        { date: 9, startTime: 4, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 9, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 9, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 10
        { date: 10, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 10, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 10, startTime: 6, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 10, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 11
        { date: 11, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
        { date: 11, startTime: 3, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 11, startTime: 5, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 11, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 12
        { date: 12, startTime: 1, endTime: 5, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 12, startTime: 5, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 12, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 12, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 13
        { date: 13, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 13, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 13, startTime: 6, endTime: 11, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 13, startTime: 11, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 13, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 14
        // Row 15
        { date: 15, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 15, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 15, startTime: 6, endTime: 11, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 15, startTime: 11, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 15, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 16
        { date: 16, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 16, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 16, startTime: 6, endTime: 11, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 16, startTime: 11, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 16, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 17
        { date: 17, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 17, startTime: 3, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 17, startTime: 5, endTime: 10, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 17, startTime: 10, endTime: 17, title: "Schedule #004", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 17, startTime: 17, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 18
        { date: 18, startTime: 0, endTime: 2, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 18, startTime: 2, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 18, startTime: 5, endTime: 8, title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 18, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 18, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 19
        { date: 19, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
        { date: 19, startTime: 4, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 19, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 19, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 20
        { date: 20, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 20, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 20, startTime: 6, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 20, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 21
        { date: 21, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
        { date: 21, startTime: 3, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 21, startTime: 5, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 21, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 22
        { date: 22, startTime: 1, endTime: 5, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 22, startTime: 5, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 22, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 22, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 23
        { date: 23, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 23, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 23, startTime: 6, endTime: 11, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 23, startTime: 11, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 23, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 25
        { date: 25, startTime: 0, endTime: 4, title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
        { date: 25, startTime: 4, endTime: 6, title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 25, startTime: 6, endTime: 11, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 25, startTime: 11, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 25, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 26
        { date: 26, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 26, startTime: 3, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 26, startTime: 5, endTime: 10, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 26, startTime: 10, endTime: 17, title: "Schedule #004", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 26, startTime: 17, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 27
        { date: 27, startTime: 0, endTime: 2, title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        { date: 27, startTime: 2, endTime: 5, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 27, startTime: 5, endTime: 8, title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
        { date: 27, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 27, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 29
        { date: 29, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
        { date: 29, startTime: 4, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 29, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 29, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
        // Row 30
        { date: 30, startTime: 0, endTime: 3, title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
        { date: 30, startTime: 4, endTime: 8, title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
        { date: 30, startTime: 8, endTime: 15, title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
        { date: 30, startTime: 15, endTime: 24, title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
      ],
      selectedDataTimeline: {},
      showFormEditTimeline: false,
      isSyncingTimeScroll: false,
      isSyncingTimelineScroll: false,
    };
  },
  mounted() {
    this.$refs.gridTime.onscroll = () => {
      if (!this.isSyncingTimeScroll) {
        this.isSyncingTimelineScroll = true;
        this.$refs.gridTimeline.scrollLeft = this.$refs.gridTime.scrollLeft;
      }
      this.isSyncingTimeScroll = false;
    };
    this.$refs.gridTimeline.onscroll = () => {
      if (!this.isSyncingTimelineScroll) {
        this.isSyncingTimeScroll = true;
        this.$refs.gridTime.scrollLeft = this.$refs.gridTimeline.scrollLeft;
      }
      this.isSyncingTimelineScroll = false;
    };
  },
  methods: {
    onClickTimeline(data) {
      this.selectedDataTimeline = data;
      this.showFormEditTimeline = true;
    },
    getDayOfWeek(index) {
      return this.weeks[index].substr(0, 3);
    },
    generateStyle(item) {
      let row = item.date + 1;
      let colStart = item.startTime + 1;
      let colEnd = item.endTime + 1;
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

  .layout-corner {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  .layout-time {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    position: relative;
  }

  .layout-days {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  .layout-timeline {
    grid-column: 2 / 3;
    grid-row: 2 / auto;
  }
}

.grid-time {
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

.grid-days {
  display: grid;
  grid-template-rows: repeat(30, 70px);
  grid-row-gap: 20px;
  border-right: 1px solid #ccc;
}

.grid-timeline {
  display: grid;
  grid-template-columns: repeat(24, 140px);
  grid-template-rows: repeat(30, 70px);
  grid-row-gap: 20px;
  grid-column-gap: 5px;
  overflow-x: scroll;
}
</style>
