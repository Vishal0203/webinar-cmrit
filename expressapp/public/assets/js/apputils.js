const validate = (field) => {
  const name = field.name;
  const value = field.value;
  const errors = [];

  return {
    required() {
      if (value === '' || value === 0) {
        errors.push({
          field: name,
          message: `${name} is a required value`
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
    getErrors() {
      return errors;
    },
    isValid() {
      return errors.length === 0;
    }
  }
}
