const btn = document.querySelector("button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// window.onload = function () {
//   let userinfo = localStorage.getItem("fullUserInfo");
//   userinfo = JSON.parse(userinfo);
//   heading1.innerText = userinfo[0].username;
//   heading2.innerText = userinfo[0].password;
// };

btn.addEventListener("click", () => {
  //read input values from the user

  emailvalue = emailInput.value;
  passwordvalue = passwordInput.value;

  //check if the user account is created

  let accounts = localStorage.getItem("fullUserInfo");
  accounts = JSON.parse(accounts);
  let found = false;
  accounts.forEach((account) => {
    if (account.email === emailvalue) {
      if (account.password === passwordvalue) {
        found = true;
      }
    }
  });

  if (found) {
    window.location.href = "welcome.html";
  } else {
    window.alert("user not found");
  }

  // if okay redirect
});
