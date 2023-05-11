import React, { ComponentPropsWithoutRef, ForwardedRef } from "react";
import classNames from "classnames/dedupe";

function LayoutPlaceholder(width: number | string, height: number | string) {
  return function Placeholder<T extends React.ElementType = "div">(
    props: ComponentPropsWithoutRef<T> & { elementType?: T | React.JSXElementConstructor<any> },
    ref: ForwardedRef<T>
  ) {
    const { elementType: ElementType = "div", className, ...otherProps } = props;

    return (
      // @ts-expect-error
      <ElementType
        ref={ref}
        className={classNames(className, "block pointer-events-none")}
        style={{ width, height }}
        {...otherProps}
      />
    );
  };
}

export default LayoutPlaceholder;
