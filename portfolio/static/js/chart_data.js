var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart;

function roundToTwoDecimals(number) {
    return Math.round(number * 100) / 100;
}

function updateChart(data, assetKeys) {
    myPieChart.data.labels = assetKeys.map(key => key.replace('_total_value_usdt', '').toUpperCase());
    myPieChart.data.datasets[0].data = assetKeys.map(key => data[key]);
    myPieChart.update();
}

function updateTable(data, assetKeys) {
    var assetTableBody = document.getElementById("assetTableBody");
    assetTableBody.innerHTML = "";

    for (var asset in data) {
        if (asset.endsWith("_total_value_usdt")) {
            var assetName = asset.replace("_total_value_usdt", "");
            var capitalizedAssetName = assetName.toUpperCase();
            var coinCountKey = assetName + "_coin_count";
            var coinCount = data[coinCountKey];
            var usdtPriceKey = assetName + "_usdt_price";
            var usdtPrice = data[usdtPriceKey];
            var totalValue = roundToTwoDecimals(data[asset]);

            var row = `<tr><td>${capitalizedAssetName}</td><td>${totalValue}</td><td>${coinCount}</td><td>${usdtPrice}</td></tr>`;
            assetTableBody.innerHTML += row;
        }
    }
}

function fetchDataAndRefresh() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            var assetKeys = Object.keys(data).filter(key => key.endsWith('_total_value_usdt'));
            var totalMoney = assetKeys.reduce((sum, key) => sum + data[key], 0);
            var roundedTotalMoney = roundToTwoDecimals(totalMoney);

            if (myPieChart) {
                updateChart(data, assetKeys);
            } else {
                myPieChart = new Chart(ctxP, {
                    type: 'pie',
                    data: {
                        labels: assetKeys.map(key => key.replace('_total_value_usdt', '').toUpperCase()),
                        datasets: [{
                            data: assetKeys.map(key => data[key]),
                            backgroundColor: ["#FFE633", "#33D1FF"],
                            hoverBackgroundColor: ["#F9FF33","#33E0FF"]
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        aspectRatio: 0.5,
                        legend: {
                            display: true,
                            position: 'right',
                        }
                    }
                });
            }

            var totalMoneyElement = document.getElementById("totalMoney");
            totalMoneyElement.innerText = "Total Money: " + roundedTotalMoney + " USDT";
            totalMoneyElement.style.textAlign = 'center';

            updateTable(data, assetKeys);
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchDataAndRefresh();
setInterval(fetchDataAndRefresh, 10000);
