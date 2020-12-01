var data = {
  labels: ['Music Lessons', 'No Music Lessons'],
  series: [
    [7, 4]
  ]
};

var options = {
  high: 7,
  low: 0,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 1 === 0 ? value : null;
    }},
    axisY: {
    onlyInteger: true,
    offset: 20
  }
};

new Chartist.Bar('.ct-chart', data, options);