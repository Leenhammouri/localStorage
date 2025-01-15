const arr = [];
const btn = document.querySelector("button");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("cpassword");

btn.addEventListener("click", (event) => {
  let validFlag = true;
  //   event.preventDefault();
  let fname = fnameInput.value;
  let lname = lnameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let cPassword = confirmPasswordInput.value;

  //   if (username === "") {
  //     usernameInput.classList.add("required");
  //     validFlag = false;
  //   }
  //   if (password === "") {
  //     passwordInput.classList.add("required");
  //     validFlag = false;
  //   }

  if (validFlag == true) {
    let userInfo = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      cPassword: cPassword,
    };

    console.log(userInfo);
    arr.push(userInfo);
    console.log(arr);

    localStorage.setItem("fullUserInfo", JSON.stringify(arr));

    let data = localStorage.getItem("fullUserInfo");
    console.log(data);
    window.location.href = "home.html";
  }
});

// usernameInput.addEventListener("input", () => {
//   usernameInput.classList.remove("required");
// });

// passwordInput.addEventListener("input", () => {
//   passwordInput.classList.remove("required");
// });
