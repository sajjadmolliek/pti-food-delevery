import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useCustomeHook = () => {
    const All = useContext(AuthContext);
    
    return (All);
};


export default useCustomeHook;