let updatePasswordFormE1 = document.getElementById("updatePasswordForm");
let newPasswordE1 = document.getElementById("newPassword");
let confirmPasswordE1 = document.getElementById("confirmPassword");
let updateBtnE1 = document.getElementById("updateBtn")
let newPasswordErrMsgE1 = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgE1 = document.getElementById("confirmPasswordErrMsg");

let validateNewPassword = function(event) {
    if (newPasswordE1.value === "") {
        newPasswordErrMsgE1.textContent = "*Required";
    } else {
        newPasswordErrMsgE1.textContent = "";
    }
};
let validateConfirmPassword = function() {
    let newPassword = newPasswordE1.value;
    let confirmPassword = confirmPasswordE1.value;
    if (newPassword !== confirmPassword) {
        confirmPasswordErrMsgE1.textContent = "*Required";
    } else {
        confirmPasswordErrMsgE1.textContent = "";
    }
}
newPasswordE1.addEventListener("blur", validateNewPassword);
confirmPasswordE1.addEventListener("blur", validateConfirmPassword);
updatePasswordFormE1.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
})