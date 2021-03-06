<template>
  <div class="">
    <div class="pa-3">
      <v-row>
        <!-- Date Controller -->
        <v-col class="d-flex align-center pa-6">
          <v-btn
            class="rounded-lg"
            outlined
            color="ub-grey"
            height="40"
            @click="goToToday"
          >
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
    </div>

    <div class="grid-layout pl-0 pl-sm-6">
      <div class="layout-corner"></div>
      <!-- Side Date -->
      <div class="layout-date d-flex d-sm-block justify-center">
        <div class="grid-date py-4">
          <v-btn
            v-for="date in currentDate.daysInMonth()"
            :id="isToday(date) ? 'today' : ''"
            :key="date"
            :class="{ 'ub-orange': isToday(date) }"
            style="align-self: center"
            height="55"
            width="55"
            icon
          >
            <div
              :class="isToday(date) ? 'white--text' : 'grey--text text--darken-3'"
            >
              <div class="text-body-2">
                {{ currentDate.date(date).toString().substring(0, 3) }}
              </div>
              <div class="font-weight-bold text-body-1" style="line-height: 1">
                {{ date }}
              </div>
            </div>
          </v-btn>
        </div>
      </div>

      <!-- Header Time -->
      <div ref="layoutTime" class="layout-time">
        <div ref="gridTime" class="grid-time px-4">
          <v-card
            v-for="(hour, i) in hoursInDay"
            :key="i"
            flat
            class="font-weight-bold my-2"
            :style="getTimeStyle(hour)"
          >
            <span class="grey--text text--darken-3">{{
              $dayjs().hour(i).minute(0).format('HH:mm')
            }}</span>
          </v-card>
          <div
            v-show="currentDate.isSame(today, 'month')"
            class="tracker-badge"
            :style="getTimeTrackerStyle"
          >
            <div class="badge rounded white--text font-weight-bold text-body-2">
              {{ today.format('HH:mm') }}
            </div>
          </div>
        </div>
      </div>

      <!-- Gantt Chart Timeline -->
      <div class="layout-timeline">
        <div
          ref="gridTimeline"
          v-dragscroll.pass="{ container: 'html', active: !supportsTouch }"
          v-scroll.self="onScrollTimeline"
          class="grid-timeline py-4 px-4"
          @dragscrollstart="onDragStart"
          @dragscrollend="onDragEnd"
          @click.capture="onDragClick"
        >
          <v-hover
            v-for="(item, i) in dataTimeline"
            :key="i"
            v-slot="{ hover }"
            :style="getTimelineStyle(item)"
          >
            <v-card
              flat
              :color="item.bgColor"
              :elevation="hover ? 4 : 0"
              class="px-3 py-2 rounded-lg d-flex justify-left"
              @click="onClickTimeline(item)"
            >
              <div style="position: sticky; left: 0">
                <div class="d-flex align-start">
                  <v-icon
                    v-if="isRunning(item)"
                    :color="item.fgColor"
                    class="mt-1 mr-2"
                    size="22"
                    >mdi-google-play</v-icon
                  >
                  <div>
                    <div class="font-weight-bold">{{ item.title }}</div>
                    <div>{{ item.startTime }} - {{ item.endTime }}</div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-hover>
          <div
            v-show="currentDate.isSame(today, 'month')"
            class="tracker-timeline"
            :style="getTimelineTrackerStyle"
          >
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog Form Edit Timeline -->
    <v-dialog v-model="showFormEditTimeline" max-width="600px" scrollable>
      <v-card rounded="lg">
        <v-card-title class="py-3 pr-3">
          <span class="text-h5">Edit Timeline</span>
          <v-spacer></v-spacer>
          <v-btn color="ub-grey" large icon @click="showFormEditTimeline = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pb-0 px-3 px-sm-6 pt-3 pt-sm-6">
          <v-container>
            <v-text-field
              v-model="selectedDataTimeline.title"
              label="Title"
              outlined
              class="rounded-lg mb-2"
            >
            </v-text-field>
            <date-picker v-model="selectedDataTimeline.date" label="Date" />
            <time-picker
              v-model="selectedDataTimeline.startTime"
              label="Start Time"
            />
            <time-picker v-model="selectedDataTimeline.endTime" label="End Time" />
            <color-picker
              v-model="selectedDataTimeline.bgColor"
              label="Background Color"
            />
            <color-picker
              v-model="selectedDataTimeline.fgColor"
              label="Foreground Color"
            />
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getTimeline } from './dataTimeline.js'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import ColorPicker from './ColorPicker'

const MINUTES_IN_HOUR = 60
const HOURS_IN_DAY = 24
const GRID_TIME_COLUMN_GAP = 5
const GRID_TIME_COLUMN_WIDTH = GRID_TIME_COLUMN_GAP + 140

const SUPPORTS_TOUCH =
  'ontouchstart' in window ||
  navigator.msMaxTouchPoints > 0 ||
  navigator.maxTouchPoints > 0

export default {
  components: {
    DatePicker,
    TimePicker,
    ColorPicker,
  },
  data() {
    return {
      day: 1,
      today: this.$dayjs(),
      currentDate: this.$dayjs().date(1),
      month: this.$dayjs().month(),
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      dataTimeline: [],
      selectedDataTimeline: {},
      showFormEditTimeline: false,
      supportsTouch: SUPPORTS_TOUCH,
      hoursInDay: HOURS_IN_DAY,
      dragging: false,
      dragTimeout: null,
    }
  },
  computed: {
    getTimeTrackerStyle() {
      let colStart = this.today.hour() + 1
      let marginLeft = 0
      if (this.today.minute() > 0) {
        marginLeft =
          (GRID_TIME_COLUMN_WIDTH / MINUTES_IN_HOUR) * parseInt(this.today.minute())
      }
      return {
        'grid-row': `1/2`,
        'grid-column': `${colStart} / auto`,
        'margin-left': `${marginLeft}px`,
      }
    },
    getTimelineTrackerStyle() {
      let rowEnd = this.today.daysInMonth() + 1
      let colStart = this.today.hour() + 1
      let marginLeft = 0
      if (this.today.minute() > 0) {
        marginLeft =
          (GRID_TIME_COLUMN_WIDTH / MINUTES_IN_HOUR) * parseInt(this.today.minute())
      }
      return {
        'grid-row': `1/${rowEnd}`,
        'grid-column': `${colStart} / auto`,
        'margin-left': `${marginLeft}px`,
      }
    },
  },
  watch: {
    currentDate(val) {
      this.dataTimeline = getTimeline(val)
    },
  },
  mounted() {
    this.dataTimeline = getTimeline(this.today)
    setInterval(() => {
      this.today = this.$dayjs()
    }, 5000)
  },
  methods: {
    onClickTimeline(data) {
      this.selectedDataTimeline = data
      this.showFormEditTimeline = true
    },
    onScrollTimeline(e) {
      this.$refs.gridTime.scrollLeft = e.target.scrollLeft
    },
    onClickNextMonth() {
      this.currentDate = this.currentDate.month(this.currentDate.month() + 1)
    },
    onClickPrevMonth() {
      this.currentDate = this.currentDate.month(this.currentDate.month() - 1)
    },
    onDragStart() {
      this.dragTimeout = setTimeout(() => (this.dragging = true), 100) // Minimal delay to be regarded as drag instead of click
    },
    onDragEnd() {
      clearTimeout(this.dragTimeout)
      setTimeout(() => (this.dragging = false))
    },
    onDragClick(e) {
      if (this.dragging) e.stopPropagation()
      this.dragging = false
    },
    isToday(date) {
      return (
        this.$dayjs().date(date).isSame(this.today, 'day') &&
        this.$dayjs().date(date).isSame(this.currentDate, 'month')
      )
    },
    goToToday() {
      this.currentDate = this.$dayjs()
      this.$nextTick(() => {
        this.$vuetify.goTo('#today', { offset: 60 })
        // scroll to current schedule
        const offsetHour = this.today.hour() * GRID_TIME_COLUMN_WIDTH
        const offsetMinute =
          (this.today.minute() * GRID_TIME_COLUMN_WIDTH) / MINUTES_IN_HOUR
        this.$refs.gridTimeline.scrollLeft =
          offsetHour + offsetMinute - GRID_TIME_COLUMN_WIDTH
      })
    },
    isRunning(item) {
      if (this.today.format('YYYY-MM-DD') == item.date) {
        if (
          this.today.format('HH:mm') >= item.startTime &&
          this.today.format('HH:mm') < item.endTime
        ) {
          return true
        }
      }
      return false
    },
    getTimeStyle(hour) {
      return {
        'grid-row': `1/2`,
        'grid-column': `${hour} / ${hour + 1}`,
      }
    },
    getTimelineStyle(item) {
      let rowStart = parseInt(this.$dayjs(item.date).format('DD'))
      let rowEnd = parseInt(rowStart) + 1
      let colStart = parseInt(item.startTime.substring(0, 2)) + 1
      let colEnd = parseInt(item.endTime.substring(0, 2)) + 1

      let marginLeft = 0
      let marginRight = 0
      if (parseInt(item.startTime.substring(3, 5)) > 0) {
        marginLeft =
          (GRID_TIME_COLUMN_WIDTH / MINUTES_IN_HOUR) *
          parseInt(item.startTime.substring(3, 5))
      }
      if (parseInt(item.endTime.substring(3, 5)) > 0) {
        colEnd += 1
        marginRight =
          (GRID_TIME_COLUMN_WIDTH / MINUTES_IN_HOUR) *
          (MINUTES_IN_HOUR - parseInt(item.endTime.substring(3, 5)))
      }
      return {
        'grid-row': `${rowStart}/${rowEnd}`,
        'grid-column': `${colStart}/${colEnd}`,
        'margin-left': `${marginLeft}px`,
        'margin-right': `${marginRight}px`,
        color: item.fgColor,
      }
    },
  },
}
</script>

<style lang="scss">
$APP_BAR_HEIGHT: 80px;
$HOURS_IN_DAY: 24;
$DAYS_IN_MONTH: 31;
$GRID_TIME_COLUMN_WIDTH: 140px;
$GRID_TIME_COLUMN_GAP: 5px;
$GRID_TIME_ROW_HEIGHT: 40px;
$GRID_DATE_COLUMN_WIDTH: 70px;
$GRID_DATE_ROW_HEIGHT: 70px;
$GRID_TIMELINE_COLUMN_WIDTH: $GRID_TIME_COLUMN_WIDTH;
$GRID_TIMELINE_ROW_HEIGHT: $GRID_DATE_ROW_HEIGHT;

.grid-layout {
  display: grid;
  grid-template-columns: $GRID_DATE_COLUMN_WIDTH minmax(0, 1fr);
  grid-template-rows: $GRID_TIME_ROW_HEIGHT minmax(0, 1fr);

  .layout-corner {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .layout-time {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    position: sticky;
    top: $APP_BAR_HEIGHT;
    z-index: 2;
    border-bottom: 1px solid #ccc;
    background: white;
  }

  .layout-date {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    border-right: 1px solid #ccc;
  }

  .layout-timeline {
    grid-column: 2 / 3;
    grid-row: 2 / auto;
  }
}

.grid-time {
  display: grid;
  grid-template-columns: repeat($HOURS_IN_DAY, $GRID_TIME_COLUMN_WIDTH);
  grid-column-gap: $GRID_TIME_COLUMN_GAP;
  overflow: hidden;
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
  grid-template-rows: repeat($DAYS_IN_MONTH, $GRID_DATE_COLUMN_WIDTH);
  grid-row-gap: 20px;
}

.grid-timeline {
  display: grid;
  grid-template-columns: repeat($HOURS_IN_DAY, $GRID_TIMELINE_COLUMN_WIDTH);
  grid-template-rows: repeat($DAYS_IN_MONTH, $GRID_TIMELINE_ROW_HEIGHT);
  grid-row-gap: 20px;
  grid-column-gap: 5px;
  overflow-y: auto;
  height: 100%;
}

.tracker-timeline {
  position: relative;
  z-index: 1;
  width: 1px;

  .line {
    position: absolute;
    border-right: 1.5px dashed #ff6f02;
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
    background-color: #ff6f02;
    padding: 2px 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-top: 12px solid #ff6f02;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
    }
  }
}
</style>
