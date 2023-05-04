import React, { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from "react";
import { Switch as ReactSwitch, SwitchProps } from "@headlessui/react";
import classNames from "classnames/dedupe";

declare let DEFAULT_SWITCH_TAG: "button";
interface IProps {
  innerLabel?: string;
}

export type TSwitchProps<TTag extends ElementType = typeof DEFAULT_SWITCH_TAG> = IProps &
  SwitchProps<TTag> &
  Omit<ComponentPropsWithoutRef<TTag>, "checked" | "defaultChecked" | "onChange" | "name" | "value" | "form">;
function _Switch<TTag extends ElementType = typeof DEFAULT_SWITCH_TAG>(
  props: TSwitchProps<TTag>,
  ref: ForwardedRef<TTag>
) {
  let { className, innerLabel, ...otherProps } = props;

  return (
    // @ts-expect-error
    <ReactSwitch
      ref={ref}
      {...otherProps}
      className={classNames(
        props.checked ? "bg-primary" : "bg-primary-light",
        "box-content relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-xs border border-onLight dark:border-onDark outline-none"
      )}
    >
      {innerLabel && <span className="sr-only">{innerLabel}</span>}
      <span
        aria-hidden="true"
        className={classNames(
          props.checked ? "translate-x-5 bg-dark" : "translate-x-0 bg-primary",
          "pointer-events-none block m-0.5 h-4 w-4 transform rounded-xs"
        )}
      />
    </ReactSwitch>
  );
}

export const Switch = forwardRef(_Switch) as <TTag extends ElementType = typeof DEFAULT_SWITCH_TAG>(
  props: TSwitchProps<TTag> & { ref?: ForwardedRef<TTag> }
) => React.ReactElement;

export default Switch;
