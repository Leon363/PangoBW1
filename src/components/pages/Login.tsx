import { Button } from "@mui/material";
import React from "react";
import { Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../config/service-config";
import { ClientData } from "../../models/ClientData";
import LoginData from "../../models/LoginData";


import LoginForm from "../forms/LoginForm";
// import { Login } from "@mui/icons-material";

const Login: React.FC = () =>
{
    const navigate = useNavigate()

    // const dispatch = useDispatch();
    return <LoginForm submitFn={function (loginData: LoginData): boolean {
        const clientData = authService.login(loginData);
        if (!!clientData) {
            // dispatch(authAction(clientData as ClientData))
           
            return true;
        }
        return false;
    }  }/>
}



    
export default Login;