import HeatmapModule from 'highcharts/modules/heatmap';
import Highcharts from 'highcharts';

const heatmap = function () {
    
  var subsystems = ['Resident App', 'Medical App', 'Caregiver App', 'Family App', 'Management App'];
  var data = [];

  /**
   * Generates a skewed value for suspicious activity based on the time of day
   */
  const genSkewedValue = (currentHour, susStartTime, susEndTime, susMinMagtitude, susMaxMagtitude) => {
    return Math.floor(
      Math.random() * (currentHour) * (
        currentHour > susStartTime && currentHour < susEndTime 
        ? Math.random() * susMaxMagtitude 
        : Math.random() * susMinMagtitude
      ));
  };

  // this is like archaic JS, TODO: implement recursively
  for (let y = 0; y < 23; y++) {
      for (let x = 0; x < subsystems.length; x++) {
          var value = genSkewedValue(y, 12, 22, 15, 75);
          data.push([x, y, value]);
      }
  }

  // revisit this perhaps.
  // const calcAttacksThisHour = (currentHour, subsystemIndex) => {
  //   console.log("called fn");
  //   if (currentHour === 24) {
  //     return;
  //   } // else:
  //   return [subsystemIndex, currentHour, genSkewedValue(currentHour, 12, 22, 15, 75)].push(
  //     calcAttacksThisHour(currentHour + 1, subsystemIndex)
  //   );
  // };

  // const produceAttacksMatrix = (systems) => {
  //   let data = [];
  //   // systems.forEach((index, system) => {
  //   //   data = data.concat(calcAttacksThisHour(0, index)); 
  //   // });
  //   for (let x = 0; x < 5; x++) {
  //     data = data.concat(calcAttacksThisHour(0, x));
  //   }
  //   return data;
  // }

  // const data = produceAttacksMatrix(subsystems);

  // console.log(data);

  Highcharts.chart('heatmap', {
      chart: {
          type: 'heatmap',
          inverted: true,
      },
      
      title: {
          text: 'Suspicious Activity by Subsystem and Hour'
      },
      
      subtitle: {
          text: 'Higher intensity indicates more suspicious events'
      },
      
      xAxis: {
          categories: subsystems,
          title: {
              text: 'Subsystem'
          }
      },
      
      yAxis: {
          categories: Array.from({length: 24}, (_, i) => i + ":00"),
          title: {
              text: 'Hour of Day'
          },
          reversed: false // so that hour 0:00 is at the top
      },
      
      colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          maxColor: '#FF0000', // Intense red for high volume
          // If you want a gradient:
          stops: [
              [0, '#A5D796'],
              [0.1, '#c1d559'],
              [0.3, '#E3B52A'],
              [0.5, '#DA7706'],
              [0.7, '#B90D0D']
          ]
      },
      
      legend: {
          align: 'right',
          layout: 'vertical',
          margin: 0,
          verticalAlign: 'middle',
          symbolHeight: 280,
          enabled: false
      },
      
      tooltip: {
          formatter: function () {
              return '<b>Subsystem:</b> ' + this.series.xAxis.categories[this.point.x] + '<br>' +
                     '<b>Hour:</b> ' + this.series.yAxis.categories[this.point.y] + '<br>' +
                     '<b>Suspicious Events:</b> ' + this.point.value;
          }
      },
      
      series: [{
          name: 'Suspicious Events',
          borderWidth: 1,
          data: data,
          dataLabels: {
              enabled: false
          }
      }]
  });
};

export default heatmap;