const showCreatePassword = document.querySelector("#show-create-password");
const showConfirmPassword = document.querySelector("#show-confirm-password");
const createPassword = document.querySelector("#create-password");
const confirmPassword = document.querySelector("#confirm-password");

showCreatePassword.addEventListener("click", () => {
  if (createPassword.type === "password") {
    createPassword.type = "text";
  } else {
    createPassword.type = "password";
  }
});

showConfirmPassword.addEventListener("click", () => {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
});
