import React, {FC} from "react";
import {FieldError} from "react-hook-form";
import clsx from "clsx";

export type InputErrorProps = {
  error?: FieldError;
  className?: string;
};

export type InputErrorsProps = {
  errors: {
    [key: string]: FieldError;
  };
  inputName: string;
  className?: string;
};

export const InputError: FC<InputErrorProps> = ({error, className}) => {
  if (error) {
    if (error?.message) {
      return <span
        className={clsx("absolute text-[10px] whitespace-nowrap bottom-0 left-0 right-0 mx-auto text-red-700", className)}>{error.message}</span>;
    } else return null;
  } else return null;
};

export const InputErrorsMessages: FC<InputErrorsProps> = ({errors, inputName, className}) => {
  if (errors[inputName]) {
    if (errors[inputName].message) {
      return <span className={clsx("text-red-700", className)}>{errors[inputName].message}</span>;
    } else return null;
  } else return null;
};
