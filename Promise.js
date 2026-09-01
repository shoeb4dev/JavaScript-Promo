function Login(username, password) {

    return new Promise(function(resolve, reject) {

        if (username === "admin" && password === "1234") {

            resolve("Login Successful");

        } else {

            reject("Invalid Credentials");

        }

    });

}


Login("admin", "1234")
    .then(function(result) {

        console.log(result);

    })
    .catch(function(error) {

        console.log(error);

    });


async function GetProducts() {

    let response = await fetch("https://fakestoreapi.com/products");

    let products = await response.json();

    console.log(products);

}

GetProducts();
