import Highcharts from 'highcharts';

const loginchart = function () {
  Highcharts.chart('access', 
    {
      chartOptions: { 
        chart: {
            type: 'line',
            styledMode: true,
        },
      },
      title: {
          text: 'Daily Failed Login Attempts'
      },
      subtitle: {
          text: 'Monitoring for unusual spikes may indicate suspicious activity'
      },
      xAxis: {
          type: 'datetime',
          title: {
              text: 'Date'
          },
          tickInterval: 24 * 3600 * 1000
      },
      yAxis: {
          title: {
              text: 'Number of Failed Attempts'
          },
          min: 0
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b><br/>',
          xDateFormat: '%A, %b %e, %Y'
      },
      legend: {
          enabled: true
      },
      plotOptions: {
          series: {
              marker: {
                  enabled: true
              }
          }
      },
      series: [{
          name: 'Failed Attempts',
          data: [
              [Date.UTC(2024, 11, 1), 4],
              [Date.UTC(2024, 11, 2), 9],
              [Date.UTC(2024, 11, 3), 12],
              [Date.UTC(2024, 11, 4), 47],
              [Date.UTC(2024, 11, 5), 8],
              [Date.UTC(2024, 11, 6), 12],
              [Date.UTC(2024, 11, 7), 2]
          ]
      }]
  });
};

export default loginchart;