import { ReactNode } from "react";

import Login from "../components/pages/Login";
import Logout from "../components/pages/Logout";

import { RouteType } from "../models/RouteType";

export const LOGIN_PATH = '/login';
export const LOGOUT_PATH = '/logout';

export const ROUTES:RouteType[] = [
   
    
    {path: LOGIN_PATH, label: 'Login', element: <Login/>},
    {path: LOGOUT_PATH, label: 'Logout', element: <Logout/>,authenticated: true},
 
]