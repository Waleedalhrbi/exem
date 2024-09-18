document.getElementById("loginbtn").onclick = function(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch('https://66e80571b17821a9d9db0043.mockapi.io/Login')
    .then(function(response) {
        return response.json()
    })
    .then(function(users){
        let user = users.find(function(user){
            return user.email === email && user.password === password
        })
        if(user){
            localStorage.setItem("user", JSON.stringify(users));
            window.location.href = "welcome.html";
        }else{
            alert("You dont have account");
        }
    });
};