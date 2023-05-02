import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames/dedupe";
import Icon, { TIConProps } from "@/components/base/icon";
import IconButton from "@/components/base/button/IconButton";

import close_svg from "@material-design-icons/svg/filled/close.svg";

type DEFAULT_ELEMENT_TYPE = "span";

export interface IChipClassNames {
  root: string;
  content: string;
  icon: string;
  color: string;
}

interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IChipClassNames>;
  className?: string;

  label: string;

  icon?: TIConProps["icon"];
  IconProps?: Partial<Omit<TIConProps, "icon" | "size">>;

  color?: "current" | "dark" | "white" | "primary" | "yellow" | "green" | "red";

  theme?: "dark-filled" | "dark-outlined" | "primary" | "yellow" | "green" | "red";

  onClose?(): void;
}

export type TChipProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _Chip<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const {
    elementType: ElementType = "span",
    theme = "dark-filled",
    icon,
    IconProps,
    color,
    classes,
    className,
    label,
    onClose,
    ...otherProps
  } = props;

  const handleClose = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    onClose!();
  };

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(className, classes?.root, "inline-flex flex-nowrap items-center rounded-xs border", {
        "border-transparent bg-dark dark:bg-[#EBF0F0]/10 text-white": theme == "dark-filled",
        "border-onLight dark:border-onDark text-dark dark:text-white": theme == "dark-outlined",
        "border-primary text-primary": theme == "primary",
        "border-secondary-yellow text-secondary-yellow": theme == "yellow",
        "border-secondary-green text-secondary-green": theme == "green",
        "border-secondary-red text-secondary-red": theme == "red",
      })}
      {...otherProps}
    >
      <div
        className={classNames(
          classes?.content,
          "py-2 px-4 gap-x-1.5 flex-grow inline-grid grid-flow-col place-items-center place-content-center"
        )}
      >
        {color && (
          <span
            className={classNames(classes?.color, "block w-2 h-2 rounded-full", {
              "bg-current": color == "current",
              "bg-dark": color == "dark",
              "bg-white": color == "white",
              "bg-primary": color == "primary",
              "bg-secondary-yellow": color == "yellow",
              "bg-secondary-green": color == "green",
              "bg-secondary-red": color == "red",
            })}
          />
        )}
        {icon && (
          <Icon
            {...IconProps}
            icon={icon!}
            size="xs"
            className={classNames(IconProps?.className, classes?.icon, "fill-current")}
          />
        )}
        <span className="text-p3-bold text-center">{label}</span>
      </div>
      {onClose && (
        <IconButton
          size="sm"
          variant={theme == "dark-filled" ? "filled" : "outlined"}
          icon={close_svg}
          onClick={handleClose}
          classes={{
            root: classNames("!shadow-none", {
              "dark:!border-transparent": theme == "dark-filled",

              "!border-y-0 !border-r-0 !rounded-none": theme != "dark-filled",

              "border-onLight dark:border-onDark hover:!text-primary": theme == "dark-outlined",
              "!border-primary hover:!text-primary": theme == "primary",
              "!border-secondary-yellow hover:!text-secondary-yellow": theme == "yellow",
              "!border-secondary-green hover:!text-secondary-green": theme == "green",
              "!border-secondary-red hover:!text-secondary-red": theme == "red",
            }),
          }}
        />
      )}
    </ElementType>
  );
}

export const Chip = forwardRef(_Chip) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TChipProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default Chip;
