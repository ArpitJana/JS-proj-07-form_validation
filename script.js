// const declearetions ::
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-check');

// Function Expressions ::
const setErrorFor = function (input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   formControl.className = 'form-control error';
   small.innerText = message;
};

const setSuccessFor = function (input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
};

const isEmail = function (email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
   );
};

// Form Submit Function ::
form.addEventListener('submit', e => {
   e.preventDefault();
   checkInputs();
});

function checkInputs() {
   // trim to remove the whitespaces
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();
   console.log(usernameValue);

   // Username Check :
   if (usernameValue === '') {
      setErrorFor(username, 'Username cannot be blank');
   } else {
      setSuccessFor(username);
   }

   // Email Check :
   if (emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
   } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
   } else {
      setSuccessFor(email);
   }

   // Password Check :
   if (passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
   } else {
      setSuccessFor(password);
   }

   // Password2 Check :
   if (password2Value === '') {
      setErrorFor(password2, 'Password2 cannot be blank');
   } else if (passwordValue !== password2Value) {
      setErrorFor(password2, 'Passwords does not match');
   } else {
      setSuccessFor(password2);
   }
}
