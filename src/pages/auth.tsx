import React from 'react';
import {AuthLayout} from "../components/organisms/AuthLayout";
import AuthForm from "../components/molecoles/AuthForm";
import {Input} from "../components/atoms/input";

const Auth = () => {
    return (
       <AuthLayout>
                <AuthForm />
       </AuthLayout>
    );
};

export default Auth;