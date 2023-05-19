import React, { FC } from "react";
import clsx from "clsx";

interface IconProps {
    size?: number;
    className?: string;
    name?: string;
    onClick?: () => void;
}

export const Icon: FC<IconProps> = ({ className, size, name, onClick }: IconProps) => (
    <span id={name} onClick={onClick} className={clsx(`icon icon-${name}`, size ? `text-[${size + "rem"}]` : "", className)} />
);
