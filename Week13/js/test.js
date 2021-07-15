var lineLabels = ['January', 'Febulary', 'March', 'April', 'May', 'June', 'July'];

var lineData = {
    labels: lineLabels,
    datasets: [{
        label:'初めてのグラフ用データセット',
        borderColor: 'rgb(130, 60, 70)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 60, 10],
    }]
};

var lineConfig = {
    type: 'line',
    lineData,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);