import {FieldError, UseFormRegisterReturn} from "react-hook-form";
import {ComponentProps, FC} from "react";
import {InputError} from "./inputError";
import clsx from "clsx";

type InputProps = ComponentProps<"input"> &
  Partial<UseFormRegisterReturn> & {
  className?: string;
  htmlFor?: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  containerClass?: string;
  showMessage?: boolean;
};

export const Input: FC<InputProps> = ({
                                        register,
                                        showMessage,
                                        placeholder,
                                        containerClass,
                                        className,
                                        htmlFor,
                                        name,
                                        error,
                                        ...restProps
                                      }) => (
  <div className={clsx("pb-6 relative text-black", containerClass)}>
    {!!(restProps?.label || htmlFor) && <label htmlFor={htmlFor}>{restProps?.label}</label>}
    <input
      className={clsx(
        "bg-transparent border p-1 border-3 placeholder:text-gray-500 appearance-none w-full py-2 border-greyLight active:bg-transparent focus:outline-none",
        {"border-accent text-accent placeholder:text-grey": !!error},
        {"placeholder:text-white": !error},
        className,
      )}
      placeholder={placeholder || ""}
      {...register}
      {...restProps}
    />
    {error && showMessage ? <InputError error={error}/> : null}
  </div>
);
