import React from 'react';
import {useForm, UseFormReturn, SubmitHandler, DefaultValues, FieldValues, FieldError} from "react-hook-form";
import {authValidateSchema} from "../../lib/validate/authValidateSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import clsx from "clsx";
import {Button} from "../atoms/button";
import {Input} from "../atoms/input";
import {Form} from "react-hook-form/dist/form";
import {Icon} from "../atoms/icon";
import {InputError} from "../atoms/inputError";

type AuthFormProps<TFormValues extends FieldValues> = {
    className?: string;
};
const AuthForm = <TFormValues extends Record<string, unknown> = Record<string, unknown>>({
                                                                                             className,
                                                                                         }: AuthFormProps<TFormValues>) => {
    const {register,handleSubmit,formState:{errors}} = useForm({resolver: yupResolver(authValidateSchema)});
    const onSubmit = handleSubmit(() =>{
        console.log("true")
    })
    return <form className={"p-2"}>
        <Input  register={register("idInstance")} showMessage={true} error={errors?.idInstance as FieldError} placeholder={"Id Instance"} className={"placeholder:text-gray-700 "}/>
        <Input  register={register("idTokenInstance")} showMessage={true}  error={errors?.idTokenInstance as FieldError}  placeholder={"Id Token Instance"} className={"placeholder:text-gray-700 "}></Input>
        <Button onClick={onSubmit} className={"m-auto relative text-black items-start bg-emerald-200 py-2 px-8 rounded-xl"} >Submit<Icon className={"absolute right-4 pt-1 text-black justify-center items-center "} name={"enter"}/></Button>
    </form>;
};

export default AuthForm;
