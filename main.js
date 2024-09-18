document.getElementById("signupbtn").onclick = function() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if(name.length < 3){
            alert("The length of name must be greter than 3 leters");
            return
        }

        let emailRejex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRejex.test(email)){
            alert("Your email incorrect");
            return
        }

        if(password.length < 4){
            alert("The length of password must be greter than 4 leters");
            return
        }

        fetch('https://66e80571b17821a9d9db0043.mockapi.io/Login', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then((response) => response.json())
          .then((date) => {
            localStorage.setItem("user", JSON.stringify(date));
            window.location.href = "login.html"
        });

};