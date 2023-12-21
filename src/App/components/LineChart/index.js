import React from "react"
import { ResponsiveLine } from "@nivo/line"
import "./styles.css"

const LineChart = ({ data, height, wrapperStyles, renderTooltip }) => (
  <div
    className="line-wrapper"
    style={{
      height: height || 240,
      ...wrapperStyles,
    }}
  >
    <ResponsiveLine
      data={data.data}
      margin={data.margin}
      xScale={
        data.xScale || {
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }
      }
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "linear",
        stacked: false,
      }}
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={data.axisBottom}
      axisLeft={data.axisLeft}
      colors={{ datum: "color" }}
      pointSize={8}
      lineWidth={1.5}
      tooltip={(point) => renderTooltip(point)}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#929292",
              strokeWidth: 0.5,
            },
          },
        },
        grid: {
          line: {
            stroke: "#EEF2F6",
          },
        },
      }}
      pointColor="#ffffff"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      isInteractive={true}
      useMesh={true}
      areaOpacity={0.2}
      areaBaselineValue={0}
      legends={data.legends}
    />
  </div>
)

export default LineChart
