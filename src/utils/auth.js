import { jwtDecode } from "jwt-decode";

export const safelyDecodeToken = (token) => {
    if (!token) return null;

    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Failed to decode JWT token:', error);
        return null;
    }
};