console.log('Updated userData:', JSON.parse(localStorage.getItem('userData')));
let userData = JSON.parse(localStorage.getItem('userData'));
const emailId = document.getElementById('email-id');
const password = document.getElementById('password');
const form = document.getElementById('form');
const submitButton = document.getElementById('submit-btn');
console.log(emailId.value);
userData.shift();
console.log(userData);

form.addEventListener('reset', (e) => {
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
                e.preventDefault();
                alert('Wrong password!');
                return;
            }
        }
    }

    if (!userFound) {
        e.preventDefault();
        alert('Wrong email ID!');
    }
});

