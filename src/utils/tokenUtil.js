import { jwtDecode } from "jwt-decode";

export const getToken = () => {
    return localStorage.getItem("authToken");
};

export const decodeToken = () => {
    const token = getToken();

    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};

export const isTokenExpired = () => {
    const decoded = decodeToken();

    if (!decoded || !decoded.exp) return true;

    return decoded.exp * 1000 < Date.now();
};

export const isAuthenticated = () => {
    if (isTokenExpired()) {
        localStorage.removeItem("authToken");
        return false;
    }

    return true;
};