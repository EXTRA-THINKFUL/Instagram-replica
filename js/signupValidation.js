function validateFullName(fullName){
    const checkSpaceRe = /\s/;
    let isValid = true;
    if (checkSpaceRe.exec(fullName) === null) {
        isValid = false;
    }
    return isValid;
}

function validateUsername(username){
    const checkSpecialChar = /\W\D/;
    let isValid = true;
    if (checkSpecialChar.exec(username) !== null) {
        isValid = false;
    }
    return isValid;
}

function validateMobileEmail(mobileEmail) {
  const checkDigits = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let isValid = true;
  if (checkDigits.exec(mobileEmail) === null && checkEmail.exec(mobileEmail) === null) {
    isValid = false;
  }

  return isValid;
}

function validateSignupForm(){
    let userMobileEmail = document.getElementById("mobile-email");
    let userFullName = document.getElementById("fullname");
    let userUsername = document.getElementById("username");
    let userPassword = document.getElementById("password");

  if (!validateMobileEmail(userMobileEmail.value)) {
    console.log('Please give a valid email or mobile number');
    return false;
    }

    if (!validateFullName(userFullName.value)){
        console.log("Not full name");
        return false;
    }

    if (!validateUsername(userUsername.value)){
        console.log("No special characters in username");
        return false;
    }

    if (userPassword.value.length < 5){
        console.log("Password too short");
        return false;
    }

    return true;
}
