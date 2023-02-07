const loginPage = document.querySelector('.login-page');//登入畫面
const signupPage = document.querySelector('.signup-page');//註冊畫面
const addTodosPage = document.querySelector('.addTodos-page');//內頁畫面
const todoList = document.querySelector('.card-list');//有代辦事項顯示這個
const empty = document.querySelector('.empty');//沒有代辦事項顯示這個
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

// addTodos內頁----------------------------------


//登入頁----- //登入btn click事件
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(123);
})