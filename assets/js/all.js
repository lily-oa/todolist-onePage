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
var loginModal = document.querySelector('#login-modal');
var callLoginModal = new bootstrap.Modal(loginModal, {});
// 註冊頁 DOM------------------------------------

// addTodos內頁----------------------------------

//登入頁----- //登入btn click事件
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(123);
});
//# sourceMappingURL=all.js.map
