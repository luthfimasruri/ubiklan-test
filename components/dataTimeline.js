let data = [
  // Month 04/2020
  // ===============================================================
  // Row 1
  { date: "2022-04-01", startTime: "00:00", endTime: "03:20", title: "Schedule #001", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-04-01", startTime: "03:20", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-04-01", startTime: "06:00", endTime: "09:00", title: "Schedule #003", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-04-01", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-04-01", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 2
  { date: "2022-04-02", startTime: "00:20", endTime: "04:30", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-04-02", startTime: "04:30", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-04-02", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-04-02", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 3
  { date: "2022-04-03", startTime: "00:45", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-04-03", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-04-03", startTime: "06:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-04-03", startTime: "15:00", endTime: "23:59", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 4
  { date: "2022-04-04", startTime: "00:00", endTime: "03:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-04-04", startTime: "03:00", endTime: "06:00", title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
  { date: "2022-04-04", startTime: "06:00", endTime: "15:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-04-04", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 5
  { date: "2022-04-05", startTime: "00:20", endTime: "05:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-04-05", startTime: "05:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-04-05", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-04-05", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 6
  { date: "2022-04-06", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-04-06", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-04-06", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-04-06", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-04-06", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  
  // Month 05/2020
  // ===============================================================
  // Row 1
  { date: "2022-05-01", startTime: "00:00", endTime: "02:20", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-01", startTime: "02:20", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-01", startTime: "05:00", endTime: "08:00", title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-05-01", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-01", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 2
  { date: "2022-05-02", startTime: "00:00", endTime: "03:30", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-02", startTime: "04:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-02", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-02", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 3
  { date: "2022-05-03", startTime: "00:45", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-03", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-03", startTime: "06:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-03", startTime: "15:00", endTime: "23:59", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 4
  { date: "2022-05-04", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
  { date: "2022-05-04", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-04", startTime: "05:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-04", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 5
  { date: "2022-05-05", startTime: "00:20", endTime: "05:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-05", startTime: "05:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-05", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-05", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 6
  { date: "2022-05-06", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-06", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-06", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-06", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-06", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 7
  { date: "2022-05-07", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-07", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-07", startTime: "05:00", endTime: "10:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-07", startTime: "10:00", endTime: "17:00", title: "Schedule #004", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-05-07", startTime: "17:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 8
  { date: "2022-05-08", startTime: "00:00", endTime: "02:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-08", startTime: "02:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-08", startTime: "05:00", endTime: "08:00", title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-05-08", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-08", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 9
  { date: "2022-05-09", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
  { date: "2022-05-09", startTime: "04:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-09", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-09", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 10
  { date: "2022-05-10", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-10", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-10", startTime: "06:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-10", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 11
  { date: "2022-05-11", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
  { date: "2022-05-11", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-11", startTime: "05:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-11", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 12
  { date: "2022-05-12", startTime: "01:00", endTime: "05:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-12", startTime: "05:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-12", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-12", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 13
  { date: "2022-05-13", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-13", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-13", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-13", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-13", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 14
  // Row 15
  { date: "2022-05-15", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-15", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-15", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-15", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-15", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 16
  { date: "2022-05-16", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-16", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-16", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-16", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-16", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 17
  { date: "2022-05-17", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-17", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-17", startTime: "05:00", endTime: "10:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-17", startTime: "10:00", endTime: "17:00", title: "Schedule #004", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-05-17", startTime: "17:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 18
  { date: "2022-05-18", startTime: "00:00", endTime: "02:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-18", startTime: "02:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-18", startTime: "05:00", endTime: "08:00", title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-05-18", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-18", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 19
  { date: "2022-05-19", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
  { date: "2022-05-19", startTime: "04:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-19", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-19", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 20
  { date: "2022-05-20", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-20", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-20", startTime: "06:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-20", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 21
  { date: "2022-05-21", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
  { date: "2022-05-21", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-21", startTime: "05:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-21", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 22
  { date: "2022-05-22", startTime: "01:00", endTime: "05:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-22", startTime: "05:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-22", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-22", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 23
  { date: "2022-05-23", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-23", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-23", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-23", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-23", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 25
  { date: "2022-05-25", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-05-25", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-25", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-25", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-25", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 26
  { date: "2022-05-26", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-26", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-26", startTime: "05:00", endTime: "10:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-26", startTime: "10:00", endTime: "17:00", title: "Schedule #004", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-05-26", startTime: "17:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 27
  { date: "2022-05-27", startTime: "00:00", endTime: "02:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-05-27", startTime: "02:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-27", startTime: "05:00", endTime: "08:00", title: "Schedule #003", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-05-27", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-27", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 29
  { date: "2022-05-29", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
  { date: "2022-05-29", startTime: "04:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-29", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-29", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 30
  { date: "2022-05-30", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#fdcb6e", fgColor: "ffffff" },
  { date: "2022-05-30", startTime: "04:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-05-30", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-05-30", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },

  // Month 6/2022
  // ===============================================================
  // Row 1
  { date: "2022-06-01", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-01", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-01", startTime: "05:00", endTime: "10:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-01", startTime: "10:00", endTime: "17:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-01", startTime: "17:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 2
  { date: "2022-06-02", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-02", startTime: "03:00", endTime: "07:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-02", startTime: "07:00", endTime: "10:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-02", startTime: "10:00", endTime: "17:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-02", startTime: "17:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 3
  { date: "2022-06-03", startTime: "00:00", endTime: "03:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-03", startTime: "03:00", endTime: "05:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-03", startTime: "05:00", endTime: "10:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-03", startTime: "10:00", endTime: "17:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 4
  { date: "2022-06-04", startTime: "00:00", endTime: "03:20", title: "Schedule #001", type: "default", bgColor: "#dd8c61", fgColor: "ffffff" },
  { date: "2022-06-04", startTime: "03:20", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-04", startTime: "06:00", endTime: "09:00", title: "Schedule #003", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-04", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-04", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 5
  { date: "2022-06-05", startTime: "00:20", endTime: "04:30", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-05", startTime: "04:30", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-05", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-05", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 6
  { date: "2022-06-06", startTime: "00:45", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-06", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-06", startTime: "06:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-06", startTime: "15:00", endTime: "23:59", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 7
  { date: "2022-06-07", startTime: "00:00", endTime: "03:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-07", startTime: "03:00", endTime: "06:00", title: "Schedule #001", type: "default", bgColor: "#ff7675", fgColor: "ffffff" },
  { date: "2022-06-07", startTime: "06:00", endTime: "15:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-07", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 8
  { date: "2022-06-08", startTime: "00:20", endTime: "05:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-06-08", startTime: "05:00", endTime: "08:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-08", startTime: "08:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-08", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  // Row 9
  { date: "2022-06-12", startTime: "00:00", endTime: "04:00", title: "Schedule #001", type: "default", bgColor: "#00cec9", fgColor: "ffffff" },
  { date: "2022-06-12", startTime: "04:00", endTime: "06:00", title: "Schedule #002", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  { date: "2022-06-12", startTime: "06:00", endTime: "11:00", title: "Schedule #002", type: "default", bgColor: "#60dd91", fgColor: "ffffff" },
  { date: "2022-06-12", startTime: "11:00", endTime: "15:00", title: "Schedule #003", type: "default", bgColor: "#6abff5", fgColor: "ffffff" },
  { date: "2022-06-12", startTime: "15:00", endTime: "23:00", title: "Schedule #004", type: "default", bgColor: "#bd78ef", fgColor: "ffffff" },
  
];

export function getTimeline(date) {
  return data.filter(function (item) {
    return item.date.includes(date.format("YYYY-MM"))
  });
}

export { getTimeline as default };