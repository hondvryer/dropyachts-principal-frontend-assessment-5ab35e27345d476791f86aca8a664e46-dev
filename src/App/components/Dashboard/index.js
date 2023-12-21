import React, { useEffect, useState } from "react"
import moment from "moment"
import LineChart from "../LineChart"
import { generateAnalyticsData, processLineData } from "../../../utils"
import {
  ENGAGEMENT_OVERVIEW_LINE,
  INSIGHTS_DATE_FILTERS,
} from "../../../utils/constants"
import BrandHeader from "../BrandHeader"
import DateRangePicker from "../DateRangePicker"
import "./styles.css"
import DataCard from "../DataCard"

const Dashboard = () => {
  const [data, setData] = useState({})
  const [dateRange, setDateRange] = useState(INSIGHTS_DATE_FILTERS)

  useEffect(() => {
    const clicks = generateAnalyticsData(dateRange[0], dateRange[1]),
      impressions = generateAnalyticsData(dateRange[0], dateRange[1])

    const totalClicks = Object.keys(clicks)?.reduce(
      (total, dateKey) => clicks[dateKey] + total,
      0
    )
    const totalImpressions = Object.keys(clicks)?.reduce(
      (total, dateKey) => impressions[dateKey] + total,
      0
    )
    setData({
      no_of_clicks: clicks,
      no_of_impressions: impressions,
      total_clicks: totalClicks,
      total_impressions: totalImpressions,
    })
  }, [dateRange])

  const renderTooltip = (point) => (
    <div className="tooltip-container">
      <span>{`${moment(point?.point?.data?.x)?.format("MMM DD")} : `}</span>
      <span
        style={{
          fontWeight: 500,
        }}
      >
        {`${
          point?.point?.data?.y ? Math.round(point.point.data.y * 100) / 100 : 0
        }`}{" "}
        Users
      </span>
    </div>
  )

  const handleDateRange = (range) => {
    setDateRange(range)
  }

  return (
    <div>
      <BrandHeader
        dateComponent={
          <DateRangePicker
            value={dateRange}
            format="dd MMM, yyyy"
            maxDate={moment().toDate()}
            onChange={handleDateRange}
          />
        }
      />
      <div className="body-wrapper">
        <div className="cards-wrapper">
          <DataCard
            textAlignment="bottom"
            value={data?.total_clicks || 0}
            text="Total Clicks"
          />
          <DataCard
            textAlignment="bottom"
            value={data?.total_impressions || 0}
            text="Impressions"
          />
        </div>
        <div className="chart-section">
          <span className="chart-title">Impressions vs Total Clicks</span>
          <LineChart
            renderTooltip={renderTooltip}
            height={400}
            data={processLineData(
              ENGAGEMENT_OVERVIEW_LINE,
              "-",
              Math.ceil(
                Math.abs(dateRange[1] - dateRange[0]) / (1000 * 60 * 60 * 24)
              ),
              data?.no_of_clicks || {},
              data?.no_of_impressions || {}
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
