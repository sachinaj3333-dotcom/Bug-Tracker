import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../services/auth-api";


const initialState = {
    userEmail: "neel@gmail.com",
    userPass: "123456789",
}

const signInHelper = () => {
    const [formValue, setFormValue] = useState(initialState);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authStore = useSelector((state) => state.auth);
    console.log(authStore);
    

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

    useEffect(() => {
        if (authStore.status === 200) {
            navigate("/dashboard")

        }
    },[authStore])

    return {
        handleChange,
        handleSubmit,
        formValue,
        errors,
    }
}

export default signInHelper;