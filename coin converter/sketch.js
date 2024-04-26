const ctx = document.getElementById('myChart');

const dolar_dias = "https://economia.awesomeapi.com.br/json/daily/USD-BRL/5";

const btc_dias = "https://economia.awesomeapi.com.br/json/daily/BTC-BRL/5";

const eur_dias = "https://economia.awesomeapi.com.br/json/daily/EUR-BRL/5";
var values = [];
var day = 0;

function recuperar_dias(coin_day) {
  fetch(coin_day)
    .then(resposta => {
      return resposta.json();
    })
    .then(data => {
      day = data[0].create_date;

      /*
                  day = day.split(" ");
                  day = day[0].split("-");
                  day = day[2];
      */
      day = day.split(" ")[0].split("-")[2];

      console.log(day);
      for (var v = 0; v < data.length; v++) {
        values[v] = data[v].high;

        values[v] = parseFloat(values[v]);

        values[v] = values[v].toFixed(2);
      }
      console.log(values);
    })
}

window.addEventListener("load", () => {
  recuperar_dias(dolar_dias);

  reload();
});


function reload() {
  setTimeout(() => {
     chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [day - 4, day - 3, day - 2, day - 1, day],
        datasets: [{
          label: 'coins value truoght the last 5 days',
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
  }, 1000);
}