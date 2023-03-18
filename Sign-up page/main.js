const user_email = document.getElementById("user_email");
const user_password = document.getElementById("user_password");
const user_confirm_password = document.getElementById("user_confirm_password");
const submitBtn = document.getElementById("submitBtn");
const submitBtn2 = document.getElementById("submitBtn2");
const input_container = document.querySelectorAll(".input_container");
const inputFields = document.querySelectorAll(".input_field");
const submitBtns = document.querySelectorAll(".submit_btn");
let emailContainer = input_container[0];
let passwordContainer = input_container[1];
let confirmPasswordContainer = input_container[2];
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", function () {
    if (this.value !== "") {
      submitBtns[i].style.pointerEvents = "all";
      submitBtns[i].classList.add("active");
    } else {
      submitBtns[i].style.pointerEvents = "none";
      submitBtns[i].classList.remove("active");
    }
    if (
      (user_password.value !== "") &
      (user_confirm_password.value !== "") &
      (user_password.value == user_confirm_password.value)
    ) {
      submitBtns[2].classList.add("active");
    } else {
      submitBtns[2].classList.remove("active");
    }
  });
}
submitBtn.addEventListener("click", () => {
  emailContainer.classList.add("done");
  emailContainer.classList.remove("active");
  passwordContainer.classList.add("active");
  confirmPasswordContainer.classList.add("center");
});
submitBtn2.addEventListener("click", () => {
  passwordContainer.classList.add("done");
  passwordContainer.classList.remove("active");
  confirmPasswordContainer.classList.add("active");
  confirmPasswordContainer.classList.remove("center");
});