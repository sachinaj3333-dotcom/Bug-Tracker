import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../services/auth-api";


const initialState = {
    userEmail: "",
    userPass: "",
}

const signInHelper = () => {
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

        if (!formValue.userEmail.trim()) {
            formErrors.userEmail = "Enter your Email.";
        }

        if (!formValue.userPass.trim()) {
            formErrors.userPass = "Enter your Password.";
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();

        if (isValid) {
            dispatch(signInUser(formValue));
            setFormValue(initialState);
        } else {
            // add toaster
        }
    }

    return {
        handleChange,
        handleSubmit,
        formValue,
        errors,
    }
}

export default signInHelper;