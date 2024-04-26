const URL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";

//const dolar_dias = "https://economia.awesomeapi.com.br/json/daily/USD-BRL/5";
const euro_dias = "https://economia.awesomeapi.com.br/json/daily/EUR-BRL/5";
const bitCoin_dias = "https://economia.awesomeapi.com.br/json/daily/BTC-BRL/5";

var val = document.getElementById("moeda");

var rel_val = document.getElementById("value_real");

var imagem = document.getElementById("image");

rel_val.addEventListener("keyup", i => localStorage.setItem("userVal", rel_val.value));

function recuperar() {
    rel_val.value = localStorage.getItem("userVal");
fetch(URL)
    .then(resposta => {
        return resposta.json();
    })
    .then(data => { 
        let coins = val.value.toLowerCase();

        console.log(coins);

        if(coins == "dolar-real") {
            let nome = data.USDBRL.name;
            document.getElementById("name").innerText = "coins: " + nome;
            
            let valor = data.USDBRL.high;
            console.log(rel_val);
            valor = valor * rel_val.value;
            valor = parseFloat(valor);
            document.getElementById("valor").innerText = "value: " + valor.toFixed(2);

            console.log(typeof valor);

            imagem.src = "/assets/dinheiro.png"; 

            document.getElementById("text").innerHTML = "The dollar exchange rate is influenced by various factors, including the law of supply and demand, inflation, real interest rates, international tourism, trade surplus or deficit, and more. If you want to buy US dollars, it is important to pay attention to the exchange rates practiced by financial institutions. The tourism exchange rate is used by exchange houses, banks, and online applications, and is different from the commercial exchange rate. The tourism exchange rate applies a margin on the value of the US dollar to the real, making it more expensive. Therefore, it is important to research well before buying.";
        }
        
        if(coins == "euro-real") {
            let nome = data.EURBRL.name;
            document.getElementById("name").innerText = "coins: " + nome;

            let valor = data.EURBRL.high;
            valor = valor * rel_val.value;
            valor = parseFloat(valor);
            document.getElementById("valor").innerText = "value: " + valor.toFixed(2);

            imagem.src = "/assets/moeda-de-euro.png";

            document.getElementById("text").innerHTML = "The euro exchange rate is influenced by many factors, such as the law of supply and demand, inflation in countries, real interest rate, international tourism, trade surplus or deficit, among others. The euro exchange rate is a value that fluctuates all the time, mainly due to the variations caused by the law of supply and demand. An important characteristic regarding the euro is that this currency is one of the most stable in the world. However, it is important to be aware, as this rate is also quite sensitive to market volatility. If you are going to Europe, this variation can make a difference to the travel budget. Therefore, the recommendation is not to buy all the money at once, especially in times of high or uncertainty. Thus, it is possible to build up a fund for the trip gradually and not worry so much about the fluctuations of the political-economic scenario. If you want to buy euros, it is important to pay attention to the exchange rates practiced by financial institutions. The tourism exchange rate is used by exchange houses, banks, and online applications, and is different from the commercial exchange rate. The tourism exchange rate applies a margin on the value of the euro to the real, making it more expensive. Therefore, it is important to research well before buying.";
        }

        if(coins == "bitcoin-real") {
            let nome = data.BTCBRL.name;
            document.getElementById("name").innerText = "coins: " + nome;

            let valor = data.BTCBRL.high;
            valor = valor * rel_val.value;
            valor = parseFloat(valor);
            document.getElementById("valor").innerText = "value: " + valor.toFixed(2);

            imagem.src = "/assets/bitcoin.png"; 

            document.getElementById("text").innerHTML = "A bitcoin exchange is a digital marketplace where traders can buy and sell bitcoins using different fiat currencies or altcoins. A bitcoin currency exchange is an online platform that acts as an intermediary between buyers and sellers of the cryptocurrency. The exchange rate is determined by the law of supply and demand, which means that the price of bitcoin is influenced by the number of people who want to buy or sell it. When a market order is selected, the trader is authorizing the exchange to trade the coins for the best available price in the online marketplace. With a limit order set, the trader directs the exchange to trade coins for a price below the current ask or above the current bid, depending on whether they are buying or selling. To transact in bitcoin on an exchange, a user has to register with the exchange and go through a series of verification processes to authenticate their identity. Once the authentication is successful, an account is opened for the user who then has to transfer funds into this account before they can buy coins. Different exchanges have different payment methods that can be used for depositing funds including bank wires, direct bank transfers, credit or debit cards, bank drafts, money orders and even gift cards.";
        }
    })
}

document.addEventListener("keydown", e =>{
    if(e.which == 13 && val == document.activeElement){
        recuperar();
    }

    if(e.which == 13 && rel_val == document.activeElement){
        recuperar();
    }
});

val.addEventListener("keyup", i => localStorage.setItem("search", val.value));

window.addEventListener("load", () => {
    recuperar();

    val.value = localStorage.getItem("search");
    
});