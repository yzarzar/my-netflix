import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const NavbarRouteGate = ({children}) => {
    const location = useLocation();
    const [useNav,setUseNav] = useState(false);
    useEffect(() => {
        if (location.pathname === '/signUp/registration' || location.pathname === '/signUp/regForm' || location.pathname === '/signUp') {
            setUseNav(true)
        } else {
            setUseNav(false)
        }
    },[location.pathname]) ;

    return (
        <>
            {useNav && children}
        </>
    )
}
