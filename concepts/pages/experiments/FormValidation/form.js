const form = document.getElementById('form');

form.querySelector('input[name="formFile"]').addEventListener('change', function() {
  form.querySelector('input[type="submit"]').disabled = false;
  document.getElementById('formFile-err').remove();
});

function validateImage(files) {
  let file, image;
  if (file = files[0]) {
    image = new Image();
    image.onload = function() {
      if (this.width > 1900 || this.height > 1000) {
        const err = document.createElement('div')
        err.id = "formFile-err";
        err.innerText = 'The image resolution is too high';
        form.querySelector('input[name="formFile"]').parentNode.appendChild(err);
        form.querySelector('input[type="submit"]').disabled = true;
      }
    };

    image.src = window.URL.createObjectURL(file);
  }
}

function isFormValid(form) {
  let isValid = true;
  let errors = [];

  const username = validate(form.querySelector('input[name="username"]')).required().minLength(5);
  const password = validate(form.querySelector('input[name="password"]')).required().minLength(10).password();
  const toppings = validate(form.querySelector('input[name="toppings"]')).required();
  const gender = validate(form.querySelector('input[name="gender"]')).required();
  const phoneNumber = validate(form.querySelector('input[name="phone"]')).required().phoneNumber();

  if (!username.isValid()) {
    errors = errors.concat(username.getErrors());
    isValid = false;
  }

  if (!password.isValid()) {
    errors = errors.concat(password.getErrors());
    isValid = false;
  }

  if (!toppings.isValid()) {
    errors = errors.concat(toppings.getErrors());
    isValid = false;
  }

  if (!gender.isValid()) {
    errors = errors.concat(gender.getErrors());
    isValid = false;
  }

  if (!phoneNumber.isValid()) {
    errors = errors.concat(phoneNumber.getErrors());
    isValid = false;
  }

  return { isValid, errors };
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const file = validate(form.querySelector('input[name="formFile"]')).required();
  validateImage(file.getFieldValue());

  const { isValid, errors } = isFormValid(this);
  if (isValid) {
    this.submit();
  } else {
    const errorNode = document.getElementById('form-errors');
    errors.forEach((error) => {
      const liTag = document.createElement('li');
      liTag.innerText = error.message;

      errorNode.appendChild(liTag);
    })
  };
})