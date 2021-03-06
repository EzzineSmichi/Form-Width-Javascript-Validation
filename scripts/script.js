let formValid = document.querySelector('.btn');
formValid.addEventListener('click', validation);

function validation(e){

    // validtion the name
    let name = document.querySelector('#name');
    let msgName = document.querySelector('#nameError');
    let ragexName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (name.validity.valueMissing) {
        e.preventDefault();
        
        msgName.style.visibility = 'visible';
        msgName.classList.add('notValid');
        msgName.textContent = 'Please enter your name';
    } else if (ragexName.test(name.value) == false ) {
        e.preventDefault();
        
        msgName.style.visibility = 'visible';
        msgName.classList.add('notValid');
        msgName.textContent = 'Please enter your name correctly';
    } else {
        msgName.textContent = ' ';
    }


    // validation the email
    let mail = document.querySelector('#mail');
    let msgMail = document.querySelector('#mailError');
    let ragexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (mail.validity.valueMissing) {
        e.preventDefault();
        msgMail.style.visibility = 'visible';
        msgMail.classList.add('notValid');
        msgMail.textContent = 'Please enter your email';
    } else if (ragexMail.test(mail.value) == false) {
        e.preventDefault();
        msgMail.style.visibility = 'visible';
        msgMail.classList.add('notValid');
        msgMail.textContent = 'Please enter your email correctly';
    } else {
        msgMail.textContent = ' ';
    }


    // validation the phone number
    let phone = document.querySelector('#phone');
    let msgPhone = document.querySelector('#phoneError');
    let ragexPhone =  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

    if (phone.validity.valueMissing) {
        e.preventDefault();
        msgPhone.style.visibility = 'visible';
        msgPhone.classList.add('notValid');
        msgPhone.textContent = 'Please enter your phone number';
    } else if(ragexPhone.test(phone.value) == false) {
        e.preventDefault();
        msgPhone.style.visibility = 'visible';
        msgPhone.classList.add('notValid');
        msgPhone.textContent = 'Please enter your phone number correctly';
    } else {
        msgPhone.textContent = ' ';
    }


    //validation the gender
     let radioM =document.querySelector('#male');
    let radioF =document.querySelector('#female');
    let genderError = document.querySelector('#genderError');

    if ((!radioM.checked) && (!radioF.checked)) {
        e.preventDefault();
        genderError.style.visibility = 'visible';
        genderError.classList.add('notValid');
        genderError.textContent = 'Please select your gender';
    } else {
        genderError.textContent = ' ';
    }


    let check = document.querySelector('#check');
    let checkError = document.querySelector('#checkError');

    if (!check.checked) {
        e.preventDefault();
        checkError.style.visibility = 'visible';
        checkError.classList.add('notValid');
        checkError.textContent = 'Please tick this box';
    } else {
        checkError.textContent = ' ';
    }
}
