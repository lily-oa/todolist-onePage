"use strict";

var loginPage = document.querySelector('.login-page'); //登入畫面
var signupPage = document.querySelector('.signup-page'); //註冊畫面
var addTodosPage = document.querySelector('.addTodos-page'); //內頁畫面
var todoList = document.querySelector('.card-list'); //有代辦事項顯示這個
var empty = document.querySelector('.empty'); //沒有代辦事項顯示這個
// let token = '';
var todoData = []; //抓出陣列資料放這裡
var apiUrl = "https://todoo.5xcamp.us";
var tabStatus = "all"; // all finished unfinished
// 登入頁 DOM------------------------------------
var loginEmail = document.querySelector('#login-email');
var loginPassword = document.querySelector('#login-password');
var loginBtn = document.querySelector('#login-btn');
var goSignUpBtn = document.querySelector('.go-signup-btn');
var loginStatusTxt = document.querySelector('.login-status-txt');
var loginAlertTxt = document.querySelector('.login-alert-txt');
//const loginModal = document.querySelector('#login-modal');
//const callLoginModal = new bootstrap.Modal(loginModal, {});
// 註冊頁 DOM------------------------------------
var signUpEmail = document.querySelector('#signup-email');
var signUpNickname = document.querySelector('#signup-nickname');
var signUpPassword = document.querySelector('#signup-password');
var signUpPassword2 = document.querySelector('#signup-password2');
var signUpBtn = document.querySelector('.signup-btn');
var goLoginBtn = document.querySelector('.go-login-btn');
//const signupModal = document.querySelector('#signup-modal');
//const callSignupModal = new bootstrap.Modal(signupModal, {});
// addTodos內頁----------------------------------

//登入頁----- //登入btn click事件
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  var eValue = loginEmail.value;
  var pValue = loginPassword.value;
  if (eValue.trim() !== '' && pValue.trim() !== '') {
    login(eValue, pValue);
  }
  signUpPage.classList.remove('d-none');
  loginPage.classList.add('d-none');
});
//註冊頁連結 click事件
goLoginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  signUpPage.classList.remove('d-none');
  loginPage.classList.add('d-none');
});
// signUpBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   let eValue = signUpEmail.value

// })

//-----------------API-------------------//
//註冊API signUp()-------------
function signUp(e, n, p) {
  axios.post("".concat(apiUrl, "/users"), {
    "user": {
      "email": e,
      "nickname": n,
      "password": p
    }
  }).then(function (response) {
    console.log(response);
    loginPage.classList.remove('d-none');
    signUpPage.classList.add('d-none');
  })["catch"](function (error) {
    console.log(error.response);
  });
}

//登入API login()----------------
function login(e, p) {
  axios.post("".concat(apiUrl, "/users/sign_in"), {
    "user": {
      "email": e,
      "password": p
    }
  }).then(function (response) {
    console.log(response);
  })["catch"](function (error) {
    console.log(error.response);
  });
}
//# sourceMappingURL=all.js.map
