import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames/dedupe";

export interface IRadioClassNames {
  root: string;
  inputRoot: string;
  input: string;
  labelRoot: string;
  label: string;
  helpText: string;
}

interface IProps {
  name: string;
  label?: string;

  helpText?: string;
  className?: string;
  classes?: Partial<IRadioClassNames>;

  invalid?: boolean;
  disabled?: boolean;
}

export type TRadioProps = IProps & React.ComponentPropsWithoutRef<"input">;

function _Radio(props: TRadioProps, ref: ForwardedRef<HTMLInputElement>) {
  const { name, label, helpText, classes, className, invalid, ...otherProps } = props;
  const id_or_name = props.id || name;

  return (
    <div className={classNames(className, classes?.root, "relative flex items-start")}>
      <div className={classNames(classes?.inputRoot, "flex h-5 items-center")}>
        <input
          ref={ref}
          {...otherProps}
          type="radio"
          name={name}
          id={id_or_name}
          className={classNames(
            classes?.input,
            "h-5 w-5 !outline-none !ring-0 !ring-offset-0 bg-transparent",
            invalid
              ? "text-secondary-red border-secondary-red"
              : "text-secondary-green border-onLight dark:border-onDark",
            otherProps.disabled ? "cursor-not-allowed bg-grey-light dark:bg-grey-light/30 opacity-30" : "bg-transparent"
          )}
          aria-describedby={helpText ? `${id_or_name}-help-text` : undefined}
        />
      </div>
      {(label || helpText) && (
        <div className={classNames(classes?.labelRoot, "ml-2.5 flex flex-col justify-center")}>
          {label && (
            <label
              htmlFor={id_or_name}
              className={classNames(
                classes?.label,
                "py-0.5 text-p3-bold text-start capitalize text-dark dark:text-white"
              )}
            >
              {label}
            </label>
          )}
          {helpText && (
            <p
              id={`${id_or_name}-help-text`}
              className={classNames(
                classes?.helpText,
                "text-p3-regular text-start capitalize mt-1.5",
                invalid ? "text-secondary-red" : "text-onLight-soft dark:text-onDark-soft"
              )}
            >
              {helpText}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export const Radio = forwardRef(_Radio);

export default Radio;
