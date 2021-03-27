const sigininForm = document.getElementById('signin-form');
const siginupForm = document.getElementById('signup-form');

if (sigininForm) {
  sigininForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.querySelector('input[name="username"]');
    const password = document.querySelector('input[name="password"]');

    if (validate(username).required() && validate(password).required()) {
      e.target.submit();
    }
  });
}

if (siginupForm) {
  function isSignupFormValid() {
    let isValid = true;
    const username = document.querySelector('input[name="username"]');
    const password = document.querySelector('input[name="password"]');

    if (!validate(username).required().minLength(5).isValid()) {
      const errors = validate(username).required().minLength(5).getErrors();
      console.log(errors);
      isValid = false
    }

    if (!validate(password).required().minLength().password().isValid()) {
      const errors = validate(password).minLength().password().getErrors();
      console.log(errors);
      isValid = false
    }


    return isValid;
  }

  siginupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const file = document.querySelector('input[name="myFile"]');
    const fileContents = file.files[0];
    console.log(fileContents.size);

    if (isSignupFormValid()) {
      e.target.submit();
    }
  });
}
