function Login(username, password) {

    return new Promise(function(resolve, reject) {

        if (username === "admin" && password === "1234") {

            resolve("Login Successful");

        } else {

            reject("Invalid Credentials");

        }

    });

}


Login("admin", "123")
    .then(function(result) {

        console.log(result);

    })
    .catch(function(error) {

        console.log(error);

    });


