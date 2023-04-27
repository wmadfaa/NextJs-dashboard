import React, { ForwardedRef, forwardRef, useMemo } from "react";
import BaseButton from "@/components/base/button/BaseButton";
import classNames from "classnames/dedupe";
import { TIConProps } from "@/components/base/icon";
import Icon from "@/components/base/icon";

type DEFAULT_ELEMENT_TYPE = "button";

export interface IButtonClassNames {
  root: string;
  label: string;
  icon: string;
}
interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IButtonClassNames>;
  className?: string;

  label: string;
  icon?: TIConProps["icon"];
  IconProps?: Partial<Omit<TIConProps, "icon" | "size">>;
  iconPosition?: "start" | "end";

  variant?: "filled" | "outlined" | "transparent";
  size?: "base" | "sm";
}

export type TButtonProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _Button<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const {
    label,
    icon,
    IconProps,
    iconPosition = "start",
    variant = "filled",
    size = "base",
    elementType = "button",
    classes,
    className,
    ...otherProps
  } = props;

  const IconComponent = useMemo(
    () => (
      <Icon
        {...IconProps}
        icon={icon!}
        size={mapSize2IconSize[size]}
        className={classNames(IconProps?.className, classes?.icon, "fill-current")}
      />
    ),
    [IconProps, classes?.icon, icon, size]
  );

  return (
    // @ts-expect-error
    <BaseButton
      ref={ref}
      {...otherProps}
      elementType={elementType}
      className={classNames(
        className,
        classes?.root,
        "inline-grid grid-flow-col place-items-center place-content-center",
        {
          "!bg-primary dark:!bg-primary active:!bg-primary-dark text-dark": variant == "filled",
          "!bg-grey-solid dark:!bg-dark text-dark dark:text-white": variant == "outlined",
          "!bg-transparent !shadow-none !border-none text-dark dark:text-white hover:text-primary active:text-primary-dark dark:hover:text-primary":
            variant == "transparent",
        },
        {
          "px-9 py-4 gap-x-1.5 text-p1-bold": size == "base",
          "px-2.5 py-2 gap-x-1.5 text-p3-bold": size == "sm",
        }
      )}
    >
      {iconPosition == "start" && icon && IconComponent}
      <span className={classNames(classes?.label, "text-center capitalize")}>{label}</span>
      {iconPosition == "end" && icon && IconComponent}
    </BaseButton>
  );
}

const mapSize2IconSize: Record<Required<IProps>["size"], TIConProps["size"]> = {
  base: "sm",
  sm: "xs",
};

export const Button = forwardRef(_Button) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TButtonProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default Button;
