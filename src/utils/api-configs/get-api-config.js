export const getApiConfig = () => {
    // you can store token in local storage or redux after login

    const token = localStorage.getItem("authToken");
    console.log(token);
    

    return {
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}`})
        },
    };

};