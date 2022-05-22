<template>
  <div class="pt-3 pl-3">
    <v-container>
      <v-row>
        <!-- Date Controller -->
        <v-col class="d-flex align-center">
          <v-btn class="rounded-lg" outlined color="ub-grey" height="40" @click="goToToday">
            Today
          </v-btn>
          <div class="d-flex align-center mx-6">
            <v-btn icon @click.stop="onClickPrevMonth">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <div class="mx-3">
              {{ months[currentDate.month()] }} {{ currentDate.format('YYYY') }}
            </div>
            <v-btn icon @click.stop="onClickNextMonth">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="grid-layout pt-3 pl-3">
      <div class="layout-corner"></div>
      <!-- Side Date -->
      <div class="layout-date">
        <div class="grid-date py-4">
          <v-btn v-for="date in currentDate.daysInMonth()" :key="date" :id="isToday(date) ? 'today' : ''"
            :class="{ 'ub-orange': isToday(date) }" style="align-self: center" height="55" width="55" icon>
            <div :class="isToday(date) ? 'white--text' : 'grey--text text--darken-3'">
              <div class="body-2">{{ $dayjs().date(date).toString().substring(0, 3) }}</div>
              <div class="font-weight-bold body-1" style="line-height: 1">
                {{ date }}
              </div>
            </div>
          </v-btn>
        </div>
      </div>

      <!-- Header Time -->
      <div class="layout-time">
        <div class="grid-time px-4 overflow-hidden" ref="gridTime">
          <v-card flat v-for="(time, i) in 24" :key="i" class="font-weight-bold my-2" :style="getTimeStyle(time)">
            <span class="grey--text text--darken-3">{{ $dayjs().hour(i).minute(0).format('HH:mm') }}</span>
          </v-card>
          <div v-show="currentDate.isSame(today, 'month')" class="tracker-badge" :style="getTimeTrackerStyle">
            <div class="badge rounded white--text font-weight-bold body-2">{{ today.format('HH:mm') }}</div>
          </div>
        </div>
      </div>

      <!-- Gantt Chart Timeline -->
      <div class="layout-timeline">
        <div class="grid-timeline py-4 px-4 overflow-x-scroll" ref="gridTimeline" v-scroll.self="onScrollTimeline">
          <v-hover v-for="(item, i) in dataTimeline" :key="i" v-slot="{ hover }" :style="getTimelineStyle(item)">
            <v-card flat :color="item.bgColor" :elevation="hover ? 4 : 0" class="px-3 py-2 white--text rounded-lg"
              @click="onClickTimeline(item)">
              <div class="font-weight-bold">{{ item.title }}</div>
              <div>
                {{ item.startTime }} - {{ item.endTime }} </div>
            </v-card>
          </v-hover>
          <div v-show="currentDate.isSame(today, 'month')" class="tracker-timeline" :style="getTimelineTrackerStyle">
            <div class="line"></div>
          </div>
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
import { getTimeline } from './dataTimeline.js';

export default {
  data() {
    return {
      day: 1,
      today: this.$dayjs(),
      currentDate: this.$dayjs().date(1),
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
      dataTimeline: [],
      selectedDataTimeline: {},
      showFormEditTimeline: false,
    };
  },
  computed: {
    getTimeTrackerStyle() {
      let colStart = this.today.hour() + 1;
      let marginLeft = 0;
      const gridColWidth = 140 + 5;
      if (this.today.minute() > 0) {
        marginLeft = gridColWidth / 59 * parseInt(this.today.minute());
      }
      return {
        'grid-row': `1/2`,
        'grid-column': `${colStart} / auto`,
        'margin-left': `${marginLeft}px`,
      };
    },
    getTimelineTrackerStyle() {
      let rowEnd = this.today.daysInMonth() + 1;
      let colStart = this.today.hour() + 1;
      let marginLeft = 0;
      const gridColWidth = 140 + 5;
      if (this.today.minute() > 0) {
        marginLeft = gridColWidth / 59 * parseInt(this.today.minute());
      }
      return {
        'grid-row': `1/${rowEnd}`,
        'grid-column': `${colStart} / auto`,
        'margin-left': `${marginLeft}px`,
      };
    },
  },
  mounted() {
    this.dataTimeline = getTimeline(this.today);
    setInterval(() => {
      this.today = this.$dayjs();
    }, 10 * 1000)
  },
  methods: {
    onClickTimeline(data) {
      this.selectedDataTimeline = data;
      this.showFormEditTimeline = true;
    },
    onScrollTimeline(e) {
      this.$refs.gridTime.scrollLeft = e.target.scrollLeft;
    },
    onClickNextMonth() {
      this.currentDate = this.currentDate.month(this.currentDate.month() + 1);
    },
    onClickPrevMonth() {
      this.currentDate = this.currentDate.month(this.currentDate.month() - 1);
    },
    isToday(date) {
      return this.$dayjs().date(date).isSame(this.today, "day") && this.$dayjs().date(date).isSame(this.currentDate, "month");
    },
    goToToday() {
      this.currentDate = this.$dayjs();
      this.$nextTick(() => {
        this.$vuetify.goTo('#today', { offset: 20 });
      });
    },
    getTimeStyle(time) {
      return {
        'grid-row': `1/2`,
        'grid-column': `${time} / ${time + 1}`,
      };
    },
    getTimelineStyle(item) {
      let rowStart = parseInt(this.$dayjs(item.date).format("DD"));
      let rowEnd = parseInt(rowStart) + 1;
      let colStart = parseInt(item.startTime.substring(0, 2)) + 1;
      let colEnd = parseInt(item.endTime.substring(0, 2)) + 1;

      const gridColWidth = 140 + 5;
      let marginLeft, marginRight = 0;
      if (parseInt(item.startTime.substring(3, 5)) > 0) {
        marginLeft = gridColWidth / 59 * parseInt(item.startTime.substring(3, 5));
      }
      if (parseInt(item.endTime.substring(3, 5)) > 0) {
        colEnd += 1;
        marginRight = gridColWidth / 59 * (59 - parseInt(item.endTime.substring(3, 5)));
      }
      return {
        "grid-row": `${rowStart}/${rowEnd}`,
        "grid-column": `${colStart}/${colEnd}`,
        "margin-left": `${marginLeft}px`,
        "margin-right": `${marginRight}px`,
      };
    },
  },
  watch: {
    currentDate(val) {
      this.dataTimeline = getTimeline(val);
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
    border-bottom: 1px solid #ccc;
    position: relative;
  }

  .layout-date {
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
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;

  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
  }
}

.grid-date {
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
  height: 100%;
}

.tracker-timeline {
  position: relative;
  z-index: 1;

  .line {
    position: absolute;
    border-right: 1.5px dashed #FF6F02;
    top: -16px;
    bottom: -16px;
    left: 0;
  }
}

.tracker-badge {
  width: 1px;
  position: relative;
  z-index: 1;

  .badge {
    position: absolute;
    background-color: #FF6F02;
    padding: 2px 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-top: 12px solid #FF6F02;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
    }
  }
}
</style>
