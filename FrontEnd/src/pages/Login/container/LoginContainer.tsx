import React from 'react';

// Import custom components
import LoginComponent from '../loginComponent';

import { useAppDispatch,  } from '../../../store/reduxHook.ts';



const Login = (props:any) => {
    const dispatch = useAppDispatch();




    return (
        <LoginComponent
            {...props}
        />


    );
};
export default Login;
