import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import classNames from "classnames/dedupe";

type DEFAULT_ELEMENT_TYPE = "span";

export interface IBadgeClassNames {
  root: string;
}

interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IBadgeClassNames>;
  className?: string;

  children: ReactNode;
  theme?: "dark" | "primary" | "yellow" | "green" | "red";
}

export type TBadgeProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;
function _Badge<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const { elementType: ElementType = "span", theme = "primary", classes, className, children, ...otherProps } = props;

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(
        className,
        classes?.root,
        "py-px px-2.5 gap-x-1.5 inline-grid grid-flow-col place-items-center place-content-center rounded-xs text-p3-bold text-center",
        {
          "bg-dark dark:bg-dark-solid text-white": theme == "dark",
          "bg-primary dark:bg-primary-light text-dark dark:text-primary": theme == "primary",
          "bg-secondary-yellow text-dark": theme == "yellow",
          "bg-secondary-green text-dark": theme == "green",
          "bg-secondary-red text-dark": theme == "red",
        }
      )}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}

export const Badge = forwardRef(_Badge) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TBadgeProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default Badge;
