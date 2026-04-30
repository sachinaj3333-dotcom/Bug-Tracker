import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../services/auth-api";
import { Toast } from "bootstrap/dist/js/bootstrap.bundle.min";


const initialState = {
    userName: "",
    userEmail: "",
    userPass: "",
    confirmPass: "",
};

const signUpHelper = () => {
    const [formValue, setFormValue] = useState(initialState);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value, });
    };

    const validate = () => {
        let formErrors = {};
        if (!formValue.userName.trim()) {
            formErrors.userName = "Name is required.";
        } else if (formValue.userName.trim().length < 2) {
            formErrors.userName = "Enter a valid name.";
        }

        if (!formValue.userEmail.trim()) {
            formErrors.userEmail = "Email is required.";
        }else if (!formValue.userEmail.trim().includes("@")) {
            formErrors.userEmail = "Enter a valid email.";
        }

        if (!formValue.userPass.trim()) {
            formErrors.userPass = "Password is requird.";
        }else if (formValue.userPass.trim().length < 8) {
            formErrors.userPass = "Password must contain at least 8 characters.";
        }

        if (!formValue.confirmPass.trim()) {
            formErrors.confirmPass = "Confirm your password.";
        }else if (formValue.confirmPass.trim() !== formValue.userPass.trim()) {
            formErrors.confirmPass = "Password does not match.";
        }

        setErrors(formErrors);
        
        return Object.keys(formErrors).length === 0;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const isvalid = validate();
        
        if (isvalid) {
            dispatch(signUpUser(formValue));
            navigate("/signin");
            setFormValue(initialState);
        }else {
            // toast error message
            // alert("Please fix the errors in the form.");
        }
    }

    return {
        handleChange,
        handleSubmit,
        errors,
        formValue,
    }
}

export default signUpHelper;