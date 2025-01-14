let canvas = document.getElementById("myChart"),
    chart = canvas.getContext("2d");

function dollar_to_real() {
    val.value = "dollar-real";

    chart.destroy();

    reload();

    retrieve();

    get_days(dollar_days);

    localStorage.setItem("search", val.value);
}

function euro_to_real() {
    val.value = "euro-real";

    chart.destroy();

    reload();

    retrieve();

    get_days(eur_days);

    localStorage.setItem("search", val.value);
}

function bitcoin_to_real() {
    val.value = "bitcoin-real";

    chart.destroy();

    reload();

    retrieve();

    get_days(btc_days);

    localStorage.setItem("search", val.value);
}

