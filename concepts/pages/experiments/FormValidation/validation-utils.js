const getFieldValue = (field) => {
  switch(field.type) {
    case 'file': {
      return field.files;
    }
    case 'checkbox': {
      const selected = form.querySelectorAll(`input[name="${field.name}"]:checked`);
      return Array.from(selected).map((node) => node.value);
    }
    case 'radio': {
      const selected = form.querySelector(`input[name="${field.name}"]:checked`);
      return selected ? selected.value : ''
    }
    default: {
      return field.value;
    }
  }
}

const validate = (field) => {
  const name = field.name;
  const value = getFieldValue(field);
  const errors = [];

  return {
    required() {
      if (value === '' || value === 0 || Array.isArray(value) && value.length === 0) {
        errors.push({
          field: name,
          message: `${name} is a required field`
        })
      }

      return this;
    },
    minLength(minLength = 10) {
      if (value.length <= minLength) {
        errors.push({
          field: name,
          message: `${name} should be greater than ${minLength}`
        })
      }

      return this;
    },
    password() {
      if (value.search(/[A-Z]/g) < 0) {
        errors.push({
          field: name,
          message: `${name} should have atleast one uppercase character`
        })
      }
      if (value.search(/[$#@&^]/g) < 0) {
        errors.push({
          field: name,
          message: `${name} should have atleast one special character`
        })
      }
      return this;
    },
    phoneNumber() {
      if(value.match(/^[0-9]{10}$/g) === null) {
        errors.push({
          field: name,
          message: `${name} is invalid`
        })
      }

      return this;
    },
    getFieldValue () {
      return value
    },
    getErrors() {
      return errors;
    },
    isValid() {
      return errors.length === 0;
    }
  }
}
