const showFunction = (id) => {
  console.log("clicked");
  var password = document.getElementById(id);
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};
