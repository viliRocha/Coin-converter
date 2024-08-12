var canvas = document.getElementById("myChart");

var chart = canvas.getContext("2d");

function dolar_para_real() {
    val.value = "dolar-real";

    chart.destroy();

    reload();

    recuperar();

    recuperar_dias(dolar_dias);

    localStorage.setItem("search", val.value);
}

function euro_para_real() {
    val.value = "euro-real";

    chart.destroy();

    reload();

    recuperar();

    recuperar_dias(eur_dias);

    localStorage.setItem("search", val.value);
}

function bitcoin_para_real() {
    val.value = "bitcoin-real";

    chart.destroy();

    reload();

    recuperar();

    recuperar_dias(btc_dias);

    localStorage.setItem("search", val.value);
}

