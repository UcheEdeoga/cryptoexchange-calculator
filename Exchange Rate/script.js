const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const amountEl_one = document.getElementById("amount-one");

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch exchange rate and update teh DOM
function calculate()  {

const currency_one = currencyEl_one.value;
const currency_two = currencyEl_two.value;

fetch(`http://api.coinlayer.com/api/live?access_key=a512700b43b86c17b270a74cef171a64`)
.then(res => res.json())
.then(data => {
    console.log(data);
    const rate = data.rates[currency_one];

    console.log(rate);
    rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;

    amountEl_two.value = (amountEl_one.value * rate).toFixed(4);
});
}
// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate()
})
    
calculate ()