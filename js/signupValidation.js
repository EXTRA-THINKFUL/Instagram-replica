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

function validateSignupForm(){
    let userMobileEmail = document.getElementById("mobile-email");
    let userFullName = document.getElementById("fullname");
    let userUsername = document.getElementById("username");
    let userPassword = document.getElementById("password");

    if (userMobileEmail.value === ""){
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
