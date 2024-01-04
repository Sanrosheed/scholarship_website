const signUpPop = document.querySelector(".signUp");
const signInPop = document.querySelector(".signIn");
const signUpBtnOpenModal = document.querySelector(".signUpBtn");
const signInBtnOpenModal = document.querySelector(".signInBtn");
const btncloseModal = document.querySelector(".closeModal");
const btncloseModal2 = document.querySelector(".signInCloseModal");

// makes the sign up and overlay pop up visible
const signUpOpenModal = function () {
  signUpPop.classList.remove("hidden");
};

// opens the pop display when the sign up button is clicked
signUpBtnOpenModal.addEventListener("click", signUpOpenModal);

// makes the sign up pop up not visible
const closeModal = function () {
  signUpPop.classList.add("hidden");
  signInBtnOpenModal.classList.add("unclicked");
  signInBtnOpenModal.classList.remove("clicked");
  signUpBtnOpenModal.classList.remove("unclicked");
  signUpBtnOpenModal.classList.add("clicked");
};

// closes the pop up wheneve the cancel button is clicked
btncloseModal.addEventListener("click", closeModal);

// Changing of button styles when sign in button is clicked
const signInClick = function () {
  signInBtnOpenModal.classList.remove("unclicked");
  signInBtnOpenModal.classList.add("clicked");
  signUpBtnOpenModal.classList.remove("clicked");
  signUpBtnOpenModal.classList.add("unclicked");
};

signInBtnOpenModal.addEventListener("click", signInClick);

const signInOpenModal = function () {
  signInPop.classList.remove("hidden");
};

signInBtnOpenModal.addEventListener("click", signInOpenModal);

const signInCloseModal = function () {
  signInPop.classList.add("hidden");
  signInBtnOpenModal.classList.add("unclicked");
  signInBtnOpenModal.classList.remove("clicked");
  signUpBtnOpenModal.classList.remove("unclicked");
  signUpBtnOpenModal.classList.add("clicked");
};
btncloseModal2.addEventListener("click", signInCloseModal);

// Changing of button styles when sign up button is clicked
const signUpClick = function () {
  signUpBtnOpenModal.classList.remove("clicked");
  signUpBtnOpenModal.classList.add("unclicked");
  signInBtnOpenModal.classList.remove("unclicked");
  signInBtnOpenModal.classList.add("clicked");
};

signUpBtnOpenModal.addEventListener("click", signUpClick);
