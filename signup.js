const firstName = document.getElementById('first-name');
const emailId = document.getElementById('email-id');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const signUpForm = document.getElementById('signup-form');
const submitButton = document.querySelector('.js-btn');
let userData = JSON.parse(localStorage.getItem('userData')) || [];

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const password1 = password.value;
    const repeatPassword1 = repeatPassword.value;
    const email = emailId.value;

    if (password1 !== repeatPassword1) {
        alert('Password and Repeat Password do not match');
        return;
    }

    const firstname = firstName.value;
    const userpassword = password.value;

    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    userData.push({
        firstname: firstname,
        email: email,
        userpassword: userpassword
    });

    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Updated userData:', userData);

    window.location.href = "login.html";
});



  