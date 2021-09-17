function panYesChange() {
    document.getElementById("pno").disabled = true;
}

function panNoChange() {
    document.getElementById("pno").disabled = false;
}


function panNumberCheck() {

    let pan = document.getElementById("pno")
    if (pan.value.length !== 10) {
        alert("please enter a valid pan number")
    }
    else {
        return true;
    }
}

const emailreg = /@[a-z]/

function emailIdValidation() {
    let email = document.getElementById("emailid").value;
    if (emailreg.test(email)) {
        return true;
    } else {
        alert("please enter a valid email")
    }
}

const reg = /[0-9]/


function mLastName() {
    let lastName = document.getElementById("mLName").value;
    if (reg.test(lastName)) {
        alert("please enter only alphabets in mothers last name")
    }
    else {
        return true;
    }
}

function mFirstName() {
    let firstName = document.getElementById("mFName").value;
    if (reg.test(firstName)) {
        alert("please enter only alphabets in mothers first name")
    }
    else {
        return true;
    }
}

function mMiddleName() {
    let middleName = document.getElementById("mMName").value;
    if (reg.test(middleName)) {
        alert("please enter only alphabets in mothers middle name")
    }
    else {
        return true;
    }
}

function fMiddleName() {
    let name = document.getElementById("fMName").value;
    if (reg.test(name)) {
        alert("please enter only alphabets in fathers middle name")
    }
    else {
        return true;
    }
}

function fLastName() {
    let name = document.getElementById("fLName");
    if (reg.test(name.value)) {
        alert("please enter only alphabets in fathers last name")
    }
    else {
        return true;
    }
}

function fFirstName() {
    let name = document.getElementById("fFName");
    if (reg.test(name.value)) {
        alert("please enter only alphabets in fathers first name")
    }
    else {
        return true;
    }
}

function uFirstName() {
    let name = document.getElementById("uFName");
    if (reg.test(name.value)) {
        alert("please enter only alphabets in Your first name")
    }
    else {
        return true;
    }
}

function uLastName() {
    let uLname = document.getElementById("uLName");
    if (reg.test(uLname.value)) {
        alert("please enter only alphabets in Your last name")
    }
    else {
        return true;
    }
}

function uMiddleName() {
    let uMname = document.getElementById("uMName");
    if (reg.test(uMname.value)) {
        alert("please enter only alphabets in Your middle name")
    }
    else {
        return true;
    }
}

function pinCheck() {
    pin = document.getElementById("pin")
    if (pin.value.length == 6 && Number.isInteger(+pin.value)) {
        return true;
    }
    else {
        alert("please enter 6 digit pin code")
    }
}

function aadharCheck() {
    num = document.getElementById("adharveri");
    if ((Number.isInteger(+num.value)) && (num.value.length == 12 || num.value.length == 14)) {
        return true;
    }
    else {
        alert("Please enter valid aadhar or eid number")
    }
}

function dateCheck() {
    let thisYear = new Date().getFullYear();
    let todayDate = new Date().getDate();
    let thisMonth = new Date().getMonth() + 1;
    let dob = document.getElementById("dob").value;
    let dobYear = dob.slice(0, 4);
    let userMonth = dob.slice(5, 7);
    let userDate = dob.slice(8);
    if (((thisYear - dobYear) <= 18) && (userMonth >= thisMonth) && (userDate > todayDate)) {
        alert("please enter a date where user age should be 18 or above")
    }
    else {
        return true;
    }
}

function todayCheck() {
    let thisYear = new Date().getFullYear();
    let todayDate = new Date().getDate();
    let thisMonth = new Date().getMonth();
    let actualMonth = thisMonth + 1;
    let date = document.getElementById("today").value;
    userinputMonth = date.slice(5, 7);
    userDate = date.slice(8)
    userYear = date.slice(0, 4)
    if ((actualMonth == userinputMonth) && (todayDate == userDate) && (thisYear == userYear)) {
        return true;
    } else {
        alert("please enter today's date")
    }
}


function formValidate() {
    return (todayCheck() == true && dateCheck() == true && aadharCheck() == true && pinCheck() == true && uMiddleName() == true && uLastName() == true && uFirstName() == true && fFirstName() == true && fLastName() == true && fMiddleName() == true && mFirstName() == true && mLastName() == true && mMiddleName() == true && panNumberCheck() == true && emailIdValidation() == true) ? alert("Thank you for submitting the form") : false;
}
