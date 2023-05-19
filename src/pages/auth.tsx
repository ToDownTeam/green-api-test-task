import React, {useContext, useEffect} from 'react';
import {AuthLayout} from "../components/organisms/authLayout";
import AuthForm from "../components/molecoles/authForm";

const Auth = () => {

  return (
    <AuthLayout>
      <AuthForm/>
    </AuthLayout>
  );
};

export default Auth;