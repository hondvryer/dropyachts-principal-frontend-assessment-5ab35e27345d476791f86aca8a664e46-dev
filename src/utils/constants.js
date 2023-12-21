import moment from "moment"

export const ENGAGEMENT_OVERVIEW_LINE = {
  axisBottom: {
    format: "%b %d",
    tickValues: "every 2 days",
    orient: "bottom",
    tickSize: 0,
    tickPadding: 9,
    tickRotation: 0,
    legend: "Date",
    legendOffset: 36,
    legendPosition: "middle",
  },
  axisLeft: {
    orient: "left",
    tickSize: 0,
    tickPadding: 5,
    tickRotation: 0,
    tickValues: 4,
    legend: "Number of users",
    legendOffset: -40,
    legendPosition: "middle",
    format: (e) => Math.floor(e) === e && e,
  },
  margin: {
    top: 40,
    right: 60,
    bottom: 85,
    left: 60,
  },
  legends: [
    {
      anchor: "bottom",
      direction: "row",
      justify: false,
      translateX: 0,
      translateY: 70,
      itemsSpacing: 10,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.85,
      symbolSize: 14,
      symbolShape: "square",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
  data: [
    {
      id: "Total Clicks",
      color: "rgb(64,173,113)",
      data: [],
    },
    {
      id: "Impressions",
      color: "rgb(34,167,240)",
      data: [],
    },
  ],
}

export const INSIGHTS_DATE_FILTERS = [
  moment().subtract(10, "d").toDate(),
  moment().toDate(),
]

export const MENU_ITEMS = [
  {
    title: "Home",
    url: "https://www.dropyacht.com/",
  },
  {
    title: "About",
    url: "https://www.dropyacht.com/company",
  },
  {
    title: "Blog",
    url: "https://www.dropyacht.com/blog",
  },
  {
    title: "Privacy Policy",
    url: "https://www.dropyacht.com/privacy-policy",
  },
]
