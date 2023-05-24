console.log("this is modal ");

const log = document.querySelector(".log");
const forModal = document.querySelector(".for-modal");
const modulRegister = document.querySelector(".modul-register");
const registerClose = document.querySelector(".register-close");
const loginPerson = document.querySelector(".login-person");
const modulButtonSoc = document.querySelectorAll(".modul-button_soc");
const registerTitleCount = document.querySelector(".register-title_count");
let passwordUser;

log.addEventListener("click", function () {
  forModal.classList.remove("non");
  modulRegister.classList.remove("non");
  registerTitleLog.classList.add("highlight");
  registerTitleReg.classList.remove("highlight");
  // currentPassword.classList.remove("non");
  registerUsername.classList.add("non");
  confirmPassword.classList.add("non");
  registerTitleCount.textContent = "login";
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
    passwordUser = registerPassword.value;
  }
});
function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

// for register by modal ----------------------------------------------------
const forgot = document.querySelector(".forgot");
const registerTitleLog = document.querySelector(".register-title_log");
const registerTitleReg = document.querySelector(".register-title_reg");
const registerUsername = document.querySelector("#register-username");
const confirmPassword = document.querySelector("#confirm-password");

forgot.addEventListener("click", () => {
  registerTitleLog.classList.remove("highlight");
  registerTitleReg.classList.add("highlight");
  // currentPassword.classList.remove("non");
  registerUsername.classList.remove("non");
  confirmPassword.classList.remove("non");
  registerTitleCount.textContent = "register";
});
registerButton.addEventListener("click", function () {
  if (registerTitleLog.classList.contains("highlight")) {
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
  } else {
    if (
      registerPassword.classList.contains("style-border-green") &&
      loginEmail.classList.contains("style-border-green") &&
      registerUsername.classList.contains("style-border-green") &&
      confirmPassword.classList.contains("style-border-green")
    ) {
      loginPerson.textContent = registerUsername.value[0];
      forModal.classList.add("non");
      modulRegister.classList.add("non");
    } else {
      const tooltipText = "Check all inputs";
      registerButton.setAttribute("title", tooltipText);
    }
  }
});
registerUsername.addEventListener("blur", () => {
  if (isNameValid(registerUsername.value)) {
    registerUsername.classList.add("style-border-green");
  } else {
    registerUsername.classList.add("style-border-red");
  }
});

const NAME_REGEXP = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
function isNameValid(value) {
  return NAME_REGEXP.test(value);
}

confirmPassword.addEventListener("blur", () => {
  if (passwordUser == confirmPassword.value) {
    confirmPassword.classList.add("style-border-green");
  } else {
    confirmPassword.classList.add("style-border-red");
  }
});

// надо изменить инпуты пароля ---------------------------------------
