import React from 'react';
import {useForm, FieldValues, FieldError} from "react-hook-form";
import {createChatSchema} from "../../lib/helpers/validate/createChatSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button} from "../atoms/button";
import {Input} from "../atoms/input";

type CreateChatFormProps<TFormValues extends FieldValues> = {
  className?: string;
};
export const CreateChatForm = <TFormValues extends Record<string, unknown> = Record<string, unknown>>({
                                                                                                        className,
                                                                                                      }: CreateChatFormProps<TFormValues>) => {
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(createChatSchema)});
  const onSubmit = handleSubmit((data, event) => {
    console.log(data, event,"submit")
  })

  console.log("errors",errors)
  return (
    <form className={"flex justify-center flex-col p-2"}>
      <Input register={register("phone")}  showMessage={true} error={errors?.phone as FieldError}
             placeholder={"Phone Number"} className={"bg-gray-100 text-black placeholder:text-gray-500"}/>
      <Button
        onClick={onSubmit}
              className={"m-auto relative text-black items-start bg-cyan-700 py-2 pl-8 pr-10 rounded-xl"}>Create</Button>
    </form>
  );
};
