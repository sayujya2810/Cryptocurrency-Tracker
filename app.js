window.addEventListener('load', () =>{
    const api = "https://api.cryptonator.com/api/full/btc-usd";
    let btcPrice = document.querySelector("#btc-curr-price-usd");
    let reloadBtn = document.querySelector("#reload");
    let changeBtc = document.querySelector("#change"); 

    apiCall = (apiLink) =>{
        
        fetch(apiLink)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let {price, change} = data.ticker;

            btcPrice.textContent = "Price: " + price + " USD";
            

            if(change < 0)
            {
                changeBtc.textContent = "Change: " + change;
                changeBtc.style.color = "Red";
            }
            else{
                changeBtc.textContent = "Change: " + " + " + change;
                changeBtc.style.color = "Green";
            }

        })
        .catch((e) => {
            alert("Error: ", e);
        })

        
    }

    apiCall(api);
   
    reloadBtn.addEventListener("click", () =>{
        apiCall(api);
    })
        

});

// Div Reveal Mech



let downBtn = document.querySelector(".fa-chevron-down");
let btc = document.querySelector("#btc");

btc.animate(btc,"1s","ease")

function myFunction() {
    if (btc.style.display === "none") {
      btc.style.display = "block";
      downBtn.style.transform = "rotate(180deg)";
      downBtn.style.transition = "all 0.5s ease";
    } else {
      btc.style.display = "none";
      downBtn.style.transform = "rotate(0deg)";
    }
}
