import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import numeral from 'numeral'

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format('+0,0')
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MM',
          },
          tooltipFormat: 'll',
        },

        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return value + '월'
          },
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format('0a')
          },
        },
      },
    ],
  },
}

const buildChartData = (data, casesType) => {
  let chartData = []
  let lastDataPoint

  for (let date in data[casesType]) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      }
      chartData.push(newDataPoint)
    }

    lastDataPoint = data[casesType][date]
  }

  const colorSet = {
    confirmed: {
      backgroundColor: 'rgba(255,0,0,0.5)',
      borderColor: '#FF0000',
    },
    death: {
      backgroundColor: 'rgba(47,79,79,0.5)',
      borderColor: '#2F4F4F',
    },
    recovered: {
      backgroundColor: 'rgba(173,255,47,0.5)',
      borderColor: '#ADFF2F',
    },
  }
  let datasets = [
    {
      data: chartData,
    },
  ]

  casesType === 'cases'
    ? (datasets = { ...datasets[0], ...colorSet.confirmed })
    : casesType === 'recovered'
    ? (datasets = { ...datasets[0], ...colorSet.recovered })
    : (datasets = { ...datasets[0], ...colorSet.death })

  return [datasets]
}

function LineGraph({ country, casesType }) {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log('Init Data triggered ')
          let chartData = buildChartData(data, casesType)
          setData(chartData)
          // buildChart(chartData);
        })
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchChangeData = async () => {
      let keyword
      if (country === 'global') {
        keyword = 'all'
      } else {
        keyword = country
      }
      await fetch(
        `https://disease.sh/v3/covid-19/historical/${keyword}?lastdays=120`
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log('choosed Data triggered ')
          const adjusted = keyword === 'all' ? data : data.timeline
          let chartData = buildChartData(adjusted, casesType)
          setData(chartData)
          // buildChart(chartData);
        })
    }

    fetchChangeData()
  }, [country])

  return (
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: data,
          }}
          options={options}
        />
      )}
    </div>
  )
}

export default LineGraph
