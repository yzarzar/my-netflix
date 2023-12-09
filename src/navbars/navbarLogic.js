import { useLocation } from "react-router-dom";

export const navbarLogic = () => {
    const location = useLocation();
    const isSignUpPage = location.pathname === '/signUp' || location.pathname === '/signUp/planForm';
    return { isSignUpPage };
};