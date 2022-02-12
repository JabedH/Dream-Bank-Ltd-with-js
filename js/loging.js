document.getElementById("lgBtn").addEventListener("click", function () {
  let nameBtn = document.getElementById("nameInputBox");
  const userName = nameBtn.value;
  let passwordBtn = document.getElementById("passwordInputBox");
  const userPassword = passwordBtn.value;
  let showNameError = document.getElementById("fill-up-name");
  let showPassError = document.getElementById("fill-up-pass");
  if (userName == "admin" && userPassword == "password") {
    window.location.href = "banking.html";
  }
  if (userName != "admin") {
    showNameError.removeAttribute("hidden");
  }
  if (userPassword != "password") {
    showPassError.removeAttribute("hidden");
  }
});
