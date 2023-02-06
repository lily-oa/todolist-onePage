const loginPage = document.querySelector('.login-page');//登入畫面
const signupPage = document.querySelector('.signup-page');//註冊畫面
// let token = '';
let todoData = []; //抓出陣列資料放這裡
const apiUrl = "https://todoo.5xcamp.us";
let tabStatus = "all"; // all finished unfinished
// 登入頁 DOM------------------------------------
const loginEmail = document.querySelector('#login-email');
const loginPassword= document.querySelector('#login-password');
const loginBtn= document.querySelector('#login-btn');
const goSignUpBtn= document.querySelector('.go-signup-btn');
const loginStatusTxt= document.querySelector('.login-status-txt');
const loginAlertTxt= document.querySelector('.login-alert-txt');
const loginModal = document.querySelector('#login-modal');
const callLoginModal = new bootstrap.Modal(loginModal, {});
// 註冊頁 DOM------------------------------------