import React, { ForwardedRef, forwardRef } from "react";
import BaseButton from "@/components/base/button/BaseButton";
import classNames from "classnames/dedupe";
import { IIConProps } from "@/components/base/icon";
import Icon from "@/components/base/icon";

type DEFAULT_ELEMENT_TYPE = "button";

export interface IIconButtonClassNames {
  root: string;
  icon: string;
}
interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IIconButtonClassNames>;
  className?: string;

  icon: IIConProps["icon"];
  IconProps?: Partial<Omit<IIConProps, "icon" | "size">>;

  variant?: "filled" | "outlined" | "transparent";
  size?: "base" | "sm";
}

export type IIconButtonProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _IconButton<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const {
    icon,
    IconProps,
    variant = "filled",
    size = "base",
    elementType = "button",
    classes,
    className,
    ...otherProps
  } = props;

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
          "p-3.5": size == "base",
          "p-2": size == "sm",
        }
      )}
    >
      <Icon
        {...IconProps}
        icon={icon}
        size={mapSize2IconSize[size]}
        className={classNames(IconProps?.className, classes?.icon, "fill-current")}
      />
    </BaseButton>
  );
}

const mapSize2IconSize: Record<Required<IProps>["size"], IIConProps["size"]> = {
  base: "sm",
  sm: "xs",
};

export const IconButton = forwardRef(_IconButton) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: IIconButtonProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default IconButton;
