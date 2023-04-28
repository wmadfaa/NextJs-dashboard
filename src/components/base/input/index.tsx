import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import classNames from "classnames/dedupe";

export interface IInputClassNames {
  root: string;
  labelRoot: string;
  label: string;
  cornerHint: string;
  inputRoot: string;
  input: string;
  helpText: string;
}
interface IProps {
  name: string;
  label?: string;
  cornerHint?: ReactNode;
  helpText?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  classes?: Partial<IInputClassNames>;

  invalid?: boolean;
  disabled?: boolean;
}

export type TInputProps = IProps & React.ComponentPropsWithoutRef<"input">;
function _Input(props: TInputProps, ref: ForwardedRef<HTMLInputElement>) {
  const {
    name,
    label,
    cornerHint,
    helpText,
    startAdornment,
    endAdornment,
    classes,
    className,
    invalid,
    ...otherProps
  } = props;
  const id_or_name = props.id || name;

  return (
    <div className={classNames(className, classes?.root)}>
      {label && (
        <div
          className={classNames(
            classes?.labelRoot,
            "flex items-center justify-between mb-2.5 text-dark dark:text-white"
          )}
        >
          <label htmlFor={id_or_name} className={classNames(classes?.label, "text-p3-bold text-start capitalize")}>
            {label}
          </label>
          {cornerHint && (
            <span className={classNames(classes?.cornerHint, "text-p3-regular text-end capitalize")}>{cornerHint}</span>
          )}
        </div>
      )}
      <div
        className={classNames(
          classes?.inputRoot,
          "group w-full rounded-sm flex items-center border overflow-hidden",
          invalid ? "border-secondary-red" : "border-onLight dark:border-onDark",
          {
            "cursor-not-allowed bg-grey-light dark:bg-grey-light/30 opacity-30": otherProps.disabled,
          }
        )}
      >
        <input
          ref={ref}
          {...otherProps}
          name={name}
          id={id_or_name}
          className={classNames(
            classes?.root,
            "peer disabled:pointer-events-none py-5 flex-grow h-full bg-transparent text-p2-bold text-grey dark:text-grey-light placeholder-grey dark:placeholder-grey-light enabled:group-hotive:text-dark enabled:group-hotive:dark:text-white outline-none",
            startAdornment ? "pl-1.5" : "pl-5",
            endAdornment ? "pr-1.5" : "pr-5"
          )}
          aria-invalid={invalid}
          aria-describedby={helpText ? `${id_or_name}-help-text` : undefined}
        />
        {startAdornment}
        {endAdornment}
      </div>
      {helpText && (
        <p
          id={`${id_or_name}-help-text`}
          className={classNames(
            classes?.helpText,
            "text-p2-regular text-start capitalize mt-1.5",
            invalid ? "text-secondary-red" : "text-dark dark:text-white"
          )}
        >
          {helpText}
        </p>
      )}
    </div>
  );
}

export * from "./InputAdornment";
export const Input = forwardRef(_Input);
export default Input;
