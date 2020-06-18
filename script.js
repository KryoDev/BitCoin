

const refreshUSD = () => {
    let price = document.querySelector("#USDprice")
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(Response => Response.json())
    .then(data => {
        price.innerHTML = "USD " + data.bpi.USD.rate
        setInterval(refreshUSD(), 1000);
    });
}

refreshUSD();

const refreshEUR = () => {
    let price = document.querySelector("#EURprice")
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(Response => Response.json())
    .then(data => {
        price.innerHTML = "EUR " + data.bpi.EUR.rate
        setInterval(refreshEUR(), 1000)
    });
}

refreshEUR();

function changeTheme() {
    var body = document.querySelector("#body");
}