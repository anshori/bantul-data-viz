async function loaddata() {
  // $('#chart') remove
  $('#chart').remove();

  var datashow = document.getElementById('datashow').value;

  var data = await fetch('data/penduduk.json');

  var json = await data.json();

  var chartcontent = document.getElementById('chart-content');

  var chart = document.createElement('div');
  chart.id = 'chart';
  chartcontent.appendChild(chart);

  if (datashow == 1) {
    console.log(json[0].title);

    var options = {
      series: [{
        name: json[0].title,
        data: json[0].data
      }],
      chart: {
        type: 'bar',
        height: 700
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      xaxis: {
        categories: json[0].categories,
      },
      yaxis: {
        title: {
          text: 'Kecamatan',
          style: {
            fontSize: '14px',
          },
        },
      },
      colors: json[0].colors,
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Jiwa"
          }
        }
      },
      title: {
        text: json[0].title,
        align: "center"
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#000'],
        },
        offsetX: -5,
      },
      legend: {
        position: 'top',
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  } else if (datashow == 2) {
    console.log(json[1].title);

    var options = {
      series: [{
        name: json[1].title,
        data: json[1].data
      }],
      chart: {
        type: 'bar',
        height: 700
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      xaxis: {
        categories: json[1].categories,
      },
      yaxis: {
        title: {
          text: 'Kecamatan',
          style: {
            fontSize: '14px',
          },
        },
      },
      colors: json[1].colors,
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Jiwa"
          }
        }
      },
      title: {
        text: json[1].title,
        align: "center"
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#000'],
        },
        offsetX: -5,
      },
      legend: {
        position: 'top',
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  } else if (datashow == 3) {
    console.log(json[2].title);

    var options = {
      series: [{
        name: json[2].title,
        data: json[2].data
      }],
      chart: {
        type: 'bar',
        height: 700
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      xaxis: {
        categories: json[2].categories,
      },
      yaxis: {
        title: {
          text: 'Kecamatan',
          style: {
            fontSize: '14px',
          },
        },
      },
      colors: json[2].colors,
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Jiwa"
          }
        }
      },
      title: {
        text: json[2].title,
        align: "center"
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#000'],
        },
        offsetX: -5,
      },
      legend: {
        position: 'top',
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  } else if (datashow == 4) {
    console.log(json[3].title);

    var options = {
      series: json[3].data,
      chart: {
        width: 600,
        type: 'donut',
      },
      labels: json[3].categories,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
        }
      }],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {},
              total: {
                show: true,
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      colors: json[3].colors,
      title: {
        text: json[3].title,
        align: "center"
      },
      legend: {
        position: 'top'
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
}