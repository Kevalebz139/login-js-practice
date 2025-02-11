const firstName = document.getElementById('first-name');
const emailId = document.getElementById('email-id');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeat-password');
const form = document.getElementById('form');

export let userData = JSON.parse(localStorage.getItem('userData')) || [];

form.addEventListener('reset', (e) => {
    const password1 = password.value;
    const repeatPassword1 = repeatPassword.value;

    if (password1 !== repeatPassword1) {
        e.preventDefault();
        alert('Password and Repeat Password do not match');
        return;
    }

    const firstname = firstName.value;
    const email = emailId.value;
    const userpassword = password.value;

    userData.push({
        firstname: firstname,
        email: email,
        userpassword: userpassword
    });

    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Updated userData:', JSON.parse(localStorage.getItem('userData')));
    window.location.href = "login.html";
});
console.log('Updated userData:', JSON.parse(localStorage.getItem('userData')));



  