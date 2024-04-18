/* PIE Chart */
var pieData = {
  // 그래프 항복
  labels : ['JAVA', 'Python', 'C++', 'JSP'],

  // 항목별 데이터
  series : [5, 3, 1, 7]
};

var pieOption = {
  width : '100%',
  height : '400px'
};

new Chartist.Pie('.pie-chart', pieData, pieOption);

/* Bar chart */
var barData = {
  labels : ['2021년', '2022년', '2023년'],
  series : [[10, 15, 29]]
}

var barOptions = {
  axisY : {
    offset : 60,
    scaleMinSpace : 50,
    labelInterpolationFnc : function(value) {
      return value + ' 개'
    }
  },
  width : '100%',
  height : '400px'
}

new Chartist.Bar('.bar-chart', barData, barOptions);