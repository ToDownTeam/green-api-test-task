import {ComponentProps, FC} from "react";
import clsx from "clsx";

type ButtonProps = ComponentProps<"button">;

export const Button: FC<ButtonProps> = ({className, children, ...restProps}) => (
  <button className={clsx("font-primary cursor-pointer", className)} {...restProps}>
    {children}
  </button>
);
