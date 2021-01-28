// assign all id to variable
const idCapture = (idName) => document.getElementById(idName);
// all variable
const emailInput = idCapture("email_input");
const passwordInput = idCapture("password_input");
const loginBtn = idCapture("login_btn");
const beforeLogin = idCapture("before_login");
const afterLogin = idCapture("after_login");
const depositBalance = idCapture("deposit_balance");
const withdrawBalance = idCapture("withdraw_balance");
const mainBalance = idCapture("main_balance");
const depositInput = idCapture("deposit_input");
const withdrawInput = idCapture("withdraw_input");
const depositBtn = idCapture("deposit_btn");
const withdrawBtn = idCapture("withdraw_btn");
//visibility after & before login
afterLogin.style = "display: none !important";
// beforeLogin.style = "display: none !important";
// login section
loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    emailInput.value.toLowerCase() == "" &&
    passwordInput.value.toLowerCase() == ""
  ) {
    beforeLogin.style = "display: none !important;";
    afterLogin.style = "display: block !important";
  } else {
    alert("invalid userName or Password\nemail: demo pass: demo");
  }
});
// deposit section
depositBtn.addEventListener("click", (event) => {
  const depositInputNum = parseFloat(depositInput.value);
  if (depositInput.value > 1) {
    depositBalance.innerText =
      parseFloat(depositBalance.innerText) + depositInputNum;
    mainBalance.innerText = parseFloat(mainBalance.innerText) + depositInputNum;
    depositInput.value = "";
  } else {
    alert("Invalid Amount");
    depositInput.value = "";
  }
});
//withdrawSection
withdrawBtn.addEventListener("click", () => {
  const withdrawInputNum = parseFloat(withdrawInput.value);
  const mainBalanceNum = parseFloat(mainBalance.innerText);
  if (withdrawInputNum < 0) {
    alert("Amount can't be negative");
    withdrawInput.value = "";
  } else if (mainBalanceNum >= 1 && mainBalanceNum >= withdrawInputNum) {
    withdrawBalance.innerText =
      withdrawInputNum + parseFloat(withdrawBalance.innerText);
    mainBalance.innerText = mainBalanceNum - withdrawInputNum;
    withdrawInput.value = "";
  } else if (withdrawInput.value > mainBalanceNum) {
    alert("Insufficient Balance! Please Deposit.");
    withdrawInput.value = "";
    console.log(parseFloat(withdrawInput.value));
  } else {
    alert("Invalid Amount");
    withdrawInput.value = "";
  }
});
// enter to add value
function enterToAddValue(inputNames, inputBtn) {
  inputNames.addEventListener("keyup", (eve) =>
    eve.keyCode == 13 ? inputBtn.click() : null
  );
}
enterToAddValue(withdrawInput, withdrawBtn);
enterToAddValue(depositInput, depositBtn);