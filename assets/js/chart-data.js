/* Land data chart *************************************************/
var ctx = document.getElementById('landChart').getContext('2d');
var landChart = new Chart(ctx, {
    responsive: true,
    type: 'bar',
    data: {
        labels: ['สำรวจแล้ว', 'กำลังสำรวจ', 'ยังไม่ได้สำรวจ', 'สำรวจไม่ได้'],
        datasets: [{
            label: 'จำนวน',
            data: [12, 19, 3, 5],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(133, 202, 93, 0.5)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(133, 202, 93, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

/* Build data chart *************************************************/
var ctx = document.getElementById('buildChart').getContext('2d');
var buildChart = new Chart(ctx, {
    responsive: true,
    type: 'bar',
    data: {
        labels: ['สำรวจแล้ว', 'กำลังสำรวจ', 'ยังไม่ได้สำรวจ', 'สำรวจไม่ได้'],
        datasets: [{
            label: 'จำนวน',
            data: [7, 21, 4, 9],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(133, 202, 93, 0.5)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(133, 202, 93, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

/* Build data chart *************************************************/
var ctx = document.getElementById('condoChart').getContext('2d');
var condoChart = new Chart(ctx, {
    responsive: true,
    type: 'bar',
    data: {
        labels: ['สำรวจแล้ว', 'กำลังสำรวจ', 'ยังไม่ได้สำรวจ', 'สำรวจไม่ได้'],
        datasets: [{
            label: 'จำนวน',
            data: [14, 8, 10, 2],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(133, 202, 93, 0.5)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(133, 202, 93, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
    }
});

/* Status data chart *************************************************/
var ctx = document.getElementById('statusChart').getContext('2d');
var statusChart = new Chart(ctx, {
    responsive: true,
    type: 'horizontalBar',
    minBarLength: 0,
    data: {
        labels: ['แปลงที่ได้รับมอบหมาย', 'สำรวจแล้ว', 'ยังไม่ได้สำรวจ'],
        datasets: [{
            label: 'จำนวน',
            data: [14, 7, 7],
            backgroundColor: [
              'rgba(133, 202, 93, 0.5)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(133, 202, 93, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes:[{
                ticks: {
                    beginAtZero: true
                }
            }],
        }
    }
});
