import React, {FC} from "react";
import clsx from "clsx";

const background =  require("../../assets/images/bg.jpg");

interface LayoutProps {
  mainClassName?: string;
  className?: string;
  isHiddenIcons?: boolean;
  location?: Location;
  children?: React.ReactNode
}

export const AuthLayout: FC<LayoutProps> = ({
                                              children,
                                              className,
                                            }) => {
  return (
    <div
      className={clsx("flex justify-center items-center h-full overflow-hidden fixed bottom-0 top-0 right-0 left-0", className)}
      style={{backgroundImage: `url(${background})`}}
    >
      {children}
    </div>
  );
};
