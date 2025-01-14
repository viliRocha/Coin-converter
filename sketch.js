const ctx = document.getElementById('myChart').getContext('2d'),
      dollar_days = "https://economia.awesomeapi.com.br/json/daily/USD-BRL/5",
      btc_days = "https://economia.awesomeapi.com.br/json/daily/BTC-BRL/5",
      eur_days = "https://economia.awesomeapi.com.br/json/daily/EUR-BRL/5";

let values = [],
    day = 0;

async function get_days(coin_day) {
  const response = await fetch(coin_day),
        data = await response.json();
  day = data[0].create_date.split(" ")[0].split("-")[2];
  
  console.log(day);
  for (var v = 0; v < data.length; v++) {
    values[v] = parseFloat(data[v].high).toFixed(2);
  }
  console.log(values);
}

window.addEventListener("load", async () => {
  await get_days(dollar_days); // Asynchronous function should be expected
  reload();
});

function reload() {
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [day - 4, day - 3, day - 2, day - 1, day],
      datasets: [{
        label: 'Currency value in the last 5 days',
        data: [values[4], values[3], values[2], values[1], values[0]],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
