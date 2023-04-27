import React, { ForwardedRef, forwardRef, useMemo } from "react";
import classNames from "classnames/dedupe";
import { TIConProps } from "@/components/base/icon";
import Icon from "../icon";

type DEFAULT_ELEMENT_TYPE = "span";

export interface ITagClassNames {
  root: string;
  icon: string;
  color: string;
}

interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<ITagClassNames>;
  className?: string;

  label: string;

  icon?: TIConProps["icon"];
  IconProps?: Partial<Omit<TIConProps, "icon" | "size">>;
  iconPosition?: "start" | "end";

  color?: "dark" | "white" | "primary" | "yellow" | "green" | "red";
  colorPosition?: "start" | "end";

  theme?: "dark-filled" | "dark-outlined" | "primary" | "yellow" | "green" | "red";
}

export type TTagProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _Tag<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const {
    elementType: ElementType = "span",
    theme = "dark-filled",
    icon,
    IconProps,
    color,
    colorPosition = "start",
    iconPosition = "start",
    classes,
    className,
    label,
    ...otherProps
  } = props;

  const IconComponent = useMemo(
    () => (
      <Icon
        {...IconProps}
        icon={icon!}
        size="xs"
        className={classNames(IconProps?.className, classes?.icon, "fill-current")}
      />
    ),
    [IconProps, classes?.icon, icon]
  );

  const ColorComponent = useMemo(
    () => (
      <span
        className={classNames(classes?.color, "block w-2 h-2 rounded-full", {
          "bg-dark": color == "dark",
          "bg-white": color == "white",
          "bg-primary": color == "primary",
          "bg-secondary-yellow": color == "yellow",
          "bg-secondary-green": color == "green",
          "bg-secondary-red": color == "red",
        })}
      />
    ),
    [classes?.color, color]
  );

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(
        className,
        classes?.root,
        "py-0.5 px-5 gap-x-1.5 inline-grid grid-flow-col place-items-center place-content-center rounded-xs border",
        {
          "border-transparent bg-dark dark:bg-dark-solid/10 text-white": theme == "dark-filled",
          "border-onLight dark:border-onDark text-dark dark:text-white": theme == "dark-outlined",
          "border-primary text-primary": theme == "primary",
          "border-secondary-yellow text-secondary-yellow": theme == "yellow",
          "border-secondary-green text-secondary-green": theme == "green",
          "border-secondary-red text-secondary-red": theme == "red",
        }
      )}
      {...otherProps}
    >
      {color && colorPosition == "start" && ColorComponent}
      {iconPosition == "start" && icon && IconComponent}
      <span className="text-p3-bold text-center">{label}</span>
      {color && colorPosition == "end" && ColorComponent}
      {iconPosition == "end" && icon && IconComponent}
    </ElementType>
  );
}

export const Tag = forwardRef(_Tag) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TTagProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default Tag;
