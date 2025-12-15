const ValidateLoginForm = (values) => {
  const errors = {};

  if(!values.name.trim()) {
    errors.name = "Name required";
  } 

  if(!values.email) {
    errors.email = "Email required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if(!values.message.trim()) {
    errors.message = "Message required";
  } else if(values.message.length < 10 ) {
    errors.message = "Message must be atleast 10 characters"
  }

  return errors;
}

export default ValidateLoginForm;