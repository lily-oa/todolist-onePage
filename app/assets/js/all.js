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
const signUpEmail = document.querySelector('#signup-email');
const signUpNickname = document.querySelector('#signup-nickname');
const signUpPassword = document.querySelector('#signup-password');
const signUpPassword2 = document.querySelector('#signup-password2');
const signUpBtn = document.querySelector('.signup-btn');
const goLoginBtn = document.querySelector('.go-login-btn');
const signupModal = document.querySelector('#signup-modal');
const callSignupModal = new bootstrap.Modal(signupModal, {});
// addTodos內頁----------------------------------


//登入頁----- //登入btn click事件
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let eValue = loginEmail.value;
  let pValue = loginPassword.value;
  if((eValue.trim() !== '') && (pValue.trim() !== '')){
    login(eValue, pValue);
  }
  signUpPage.classList.remove('d-none');
  loginPage.classList.add('d-none');
})
//註冊頁連結 click事件
goLoginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  signUpPage.classList.remove('d-none');
  loginPage.classList.add('d-none');
})

//-----------------API-------------------//
//註冊API signUp()-------------
function signUp(e, n, p){
  axios.post(`${apiUrl}/users`, {
    "user": {
      "email": e,
      "nickname": n,
      "password": p
    }
  })
    .then((response) => {
      console.log(response);

      loginPage.classList.remove('d-none');
      signUpPage.classList.add('d-none');
    })
    .catch((error) => {
      console.log(error.response)

    })
}

//登入API login()----------------
function login(e, p){
  axios.post(`${apiUrl}/users/sign_in`, {
    "user": {
      "email": e,
      "password": p
    }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error.response)
    })
}