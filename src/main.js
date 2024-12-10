import './style.css';
import 'flowbite';
import Highcharts from 'highcharts';
import colours from './colours';
import heatmap from './heatmap';
import loginchart from './loginchart';

// set colour themes for charts
Highcharts.setOptions(colours);

// render loginchart
document.addEventListener('DOMContentLoaded', loginchart);

// render heatmap
document.addEventListener('DOMContentLoaded', heatmap);

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('[data-dropdown-toggle="dropdown"]').click();
});