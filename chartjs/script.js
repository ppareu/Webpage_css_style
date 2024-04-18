var ctx = document.getElementById('myChart');

// 도넛 차트 생성
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut', // 차트 종류: 도넛 차트
    data: {
        labels: ["딸기", "포도", "바나나"], // 데이터 라벨: 딸기, 포도, 바나나
        datasets: [
          {
            data: [300, 100, 80], // 각 데이터에 해당하는 값: 딸기 300개, 포도 100개, 바나나 80개
            backgroundColor: ["#f66", "#c7e", "#fc2"] // 데이터에 대응하는 배경색 설정
          }
        ]
      }
});
