    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
  title: {
    text: 'Basic Radar Chart'
  },
  legend: {
    data: ['Target KPI', 'Actual KPI']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Good Production', max: 100 },
      { name: 'Rejection', max: 100 },
      { name: 'Availability', max: 100 },
      { name: 'Performance', max: 100 },
      { name: 'Quality', max: 100 },
      { name: 'OEE', max: 100 }
    ]
  },
  series: [
    {
      name: 'Target vs Actual',
      type: 'radar',
      data: [
        {
          value: [90, 10, 90, 90, 90, 73],
          name: 'Target KPI'
        },
        {
          value: [$01, $02, $03, $04, $05, $06],
          name: 'Actual KPI'
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);