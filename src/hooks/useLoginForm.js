import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/Context";

const useLoginForm = (initialValues, ValidateForm) => {
  
  const {loginUser} = useContext(userContext);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {...values, [name]: value};
    setErrors(ValidateForm(newValues));
    setValues(newValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = ValidateForm(values);
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", values);
      loginUser(values);
      navigate("/home");
    }
  }
  
  return {errors, values, handleChange, handleSubmit};

}

export default useLoginForm;