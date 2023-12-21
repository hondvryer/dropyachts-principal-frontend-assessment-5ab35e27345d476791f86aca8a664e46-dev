import cloneDeep from "lodash.clonedeep"
import sortBy from "lodash.sortby"

const getLineTickValues = (days, line) => {
  if (days < 5 && Object.keys(line)?.length > 0) {
    return "every 1 day"
  } else if (days > 5 && Object.keys(line)?.length <= 5) {
    if (Math.floor(days / Object.keys(line)?.length) < 5) {
      return `every ${Math.ceil(days / 5)} day`
    } else {
      return `every ${Math.floor(days / Object.keys(line)?.length)} day`
    }
  } else if (days > 5 && Object.keys(line)?.length > 5) {
    return `every ${Math.ceil(days / 5)} day`
  }
  return "every 0 day"
}

export const processLineData = (meta, separator, days = 0, ...args) => {
  const newMeta = cloneDeep(meta)
  const lineData = [...args]
  if (lineData) {
    lineData.forEach((line, idx) => {
      if (line && Object.keys(line)?.length > 0) {
        const tempData = []
        Object.keys(line)?.forEach((dataItem) => {
          tempData.push({
            x: dataItem
              ?.split(separator || "-")
              ?.reverse()
              ?.join("-"),
            y: line[dataItem],
          })
        })
        newMeta.data[idx].data = sortBy(tempData, "x")
        newMeta.axisBottom.tickValues = getLineTickValues(days, line)
      } else {
        newMeta.axisBottom.tickValues = "every 0 day"
      }
    })
  }
  return newMeta
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 900) + 100 // Generates a random 3-digit number
}

function generateDateKey(date) {
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0") // Months are zero-indexed
  const year = date.getFullYear().toString()
  return `${day}-${month}-${year}`
}

export const generateAnalyticsData = (startDate, endDate) => {
  const randomObject = {}

  const currentDate = new Date(startDate)
  const endDateTime = new Date(endDate).getTime()

  while (currentDate.getTime() <= endDateTime) {
    const dateKey = generateDateKey(currentDate)
    const randomNumber = generateRandomNumber()

    randomObject[dateKey] = randomNumber

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return randomObject
}
