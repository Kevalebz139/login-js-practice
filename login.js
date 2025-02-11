console.log('Updated userData:', JSON.parse(localStorage.getItem('userData')));
let userData = JSON.parse(localStorage.getItem('userData'));
const emailId = document.getElementById('email-id');
const password = document.getElementById('password');
const loginForm = document.getElementById('login-form');
const submitButton = document.getElementById('submit-btn');
console.log(emailId.value);
console.log(userData);

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailLogin = emailId.value;
    const passwordLogin = password.value;
    let userFound = false;

    for (const userInfo of userData) {
        if (emailLogin === userInfo.email) {
            userFound = true;
            if (passwordLogin === userInfo.userpassword) {
                alert("Login successfull!");
                window.location.href = "index.html";
                return;
            } else {
                alert('Wrong password!');
                return;
            }
        }
    }

    if (!userFound) {
        alert('Wrong email ID!');
    }
});
