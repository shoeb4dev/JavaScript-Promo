function convert() {

    let inr = Number(document.getElementById("inr").value);

    // Example exchange rate
    let rate = 0.011;

    let usd = inr * rate;

    document.getElementById("result").innerHTML =
        "USD = $" + usd.toFixed(2);

}


// alart("Hello World");