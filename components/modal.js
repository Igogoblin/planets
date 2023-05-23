console.log("this is modal ");

const log = document.querySelector(".log");
const forModal = document.querySelector(".for-modal");
const modulRegister = document.querySelector(".modul-register");
const registerClose = document.querySelector(".register-close");
const loginPerson = document.querySelector(".login-person");
const modulButtonSoc = document.querySelectorAll(".modul-button_soc");

log.addEventListener("click", function () {
  forModal.classList.remove("non");
  modulRegister.classList.remove("non");
});
forModal.addEventListener("click", () => {
  forModal.classList.add("non");
  modulRegister.classList.add("non");
});
registerClose.addEventListener("click", () => {
  forModal.classList.add("non");
  modulRegister.classList.add("non");
});

for (let i = 0; i < modulButtonSoc.length; i++) {
  modulButtonSoc[i].addEventListener("click", () => {
    i === 0 ? (loginPerson.textContent = "G") : (loginPerson.textContent = "F");
    forModal.classList.add("non");
    modulRegister.classList.add("non");
  });
}
// inputs ---------------------------------------------------------------------------
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const loginEmail = document.querySelector(".login-email");
const registerButton = document.querySelector(".register-container_button");
const registerPassword = document.querySelector("#register-password");

loginEmail.addEventListener("blur", () => {
  if (isEmailValid(loginEmail.value)) {
    loginEmail.classList.add("style-border-green");
  } else {
    loginEmail.classList.add("style-border-red");
  }
});
registerPassword.addEventListener("blur", () => {
  if (registerPassword.value.length < 3) {
    registerPassword.classList.add("style-border-red");
  } else {
    registerPassword.classList.add("style-border-green");
  }
});
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
registerButton.addEventListener("click", function () {
  if (
    registerPassword.classList.contains("style-border-green") &&
    loginEmail.classList.contains("style-border-green")
  ) {
    loginPerson.textContent = loginEmail.value[0];
    forModal.classList.add("non");
    modulRegister.classList.add("non");
  } else {
    const tooltipText = "Check email or password";
    registerButton.setAttribute("title", tooltipText);
  }
});
// for register by modal ----------------------------------------------------
const forgot = document.querySelector(".forgot");
const registerTitleLog = document.querySelector(".register-title_log");
const registerTitleReg = document.querySelector(".register-title_reg");

forgot.addEventListener("click", () => {
  registerTitleLog.classList.remove("highlight");
  registerTitleReg.classList.add("highlight");
});
