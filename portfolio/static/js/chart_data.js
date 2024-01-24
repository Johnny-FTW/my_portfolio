var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart;

// Function to round a number to 2 decimal places
function roundToTwoDecimals(number) {
    return Math.round(number * 100) / 100;
}

// Function to fetch data from the server and update the chart
function fetchDataAndRefresh() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {

            // Calculate the total money value
            var totalMoney = data.ens_total_value_usdt + data.bnb_total_value_usdt;

            // Round the total money value to 2 decimal places
            var roundedTotalMoney = roundToTwoDecimals(totalMoney);

            // Check if the chart is already initialized
            if (myPieChart) {
                // Update the pie chart data
                myPieChart.data.datasets[0].data = [data.ens_total_value_usdt, data.bnb_total_value_usdt];
                myPieChart.update();
            } else {
                // Initialize the pie chart
                myPieChart = new Chart(ctxP, {
                    type: 'pie',
                    data: {
                        labels: ["ENS", "BNB"],
                        datasets: [{
                            data: [data.ens_total_value_usdt, data.bnb_total_value_usdt],
                            backgroundColor: ["#33D1FF", "#FFE633"],
                            hoverBackgroundColor: ["#33E0FF", "#F9FF33"]
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

            // Display rounded total money value in the center of the container
            var totalMoneyElement = document.getElementById("totalMoney");
            totalMoneyElement.innerText = "Total Money: " + roundedTotalMoney + " USDT";
            totalMoneyElement.style.textAlign = 'center';

            // Clear previous table content
            var assetTableBody = document.getElementById("assetTableBody");
            assetTableBody.innerHTML = "";

            // Populate the table with asset data
            for (var asset in data) {
                if (asset.endsWith("_total_value_usdt")) {
                    var assetName = asset.replace("_total_value_usdt", "");
                    var capitalizedAssetName = assetName.toUpperCase(); // Convert to uppercase
                    var coinCountKey = assetName + "_coin_count";
                    var coinCount = data[coinCountKey];
                    var usdtPriceKey = assetName + "_usdt_price";
                    var usdtPrice = data[usdtPriceKey];

                    // Round the total value to 2 decimal places
                    var totalValue = roundToTwoDecimals(data[asset]);

                    var row = `<tr><td>${capitalizedAssetName}</td><td>${totalValue}</td><td>${coinCount}</td><td>${usdtPrice}</td></tr>`;
                    assetTableBody.innerHTML += row;
                }
            }
        })
        .catch(error => console.error('Error fetching data:', error));
        // Display an error message to the user if needed
}

// Initial fetch and setup
fetchDataAndRefresh();

// Set up periodic data refresh every 10 seconds (adjust the interval as needed)
setInterval(fetchDataAndRefresh, 10000);
