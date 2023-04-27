import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames/dedupe";

type DEFAULT_ELEMENT_TYPE = "button";

export interface IBaseButtonClassNames {
  root: string;
}
interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IBaseButtonClassNames>;
  className?: string;
  children?: React.ReactNode;
}

export type TBaseButtonProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;

function _BaseButton<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const { elementType: ElementType = "button", classes, className, children, ...otherProps } = props;

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(
        className,
        classes?.root,
        "rounded-sm bg-grey-solid dark:bg-dark border border-onLight dark:border-onDark hover:shadow active:shadow-none shadow-onLight dark:shadow-onLight outline-none"
      )}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}

const BaseButton = forwardRef(_BaseButton) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TBaseButtonProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export { BaseButton };
export default BaseButton;
