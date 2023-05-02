import StateManagedSelect, { ClassNamesConfig } from "react-select";
import cx from "classnames/dedupe";
import { GroupBase } from "react-select/dist/declarations/src/types";
import React, { ForwardedRef, forwardRef, RefAttributes } from "react";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import ReactSelect from "react-select/dist/declarations/src/Select";

export type TSelectProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Omit<StateManagerProps<Option, IsMulti, Group>, "classNames"> & {
  classes?: ClassNamesConfig<Option, IsMulti, Group>;
  fullWidth?: boolean;
};
function _Select<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  { classes, fullWidth, ...otherProps }: TSelectProps<Option, IsMulti, Group>,
  ref: ForwardedRef<ReactSelect<Option, IsMulti, Group>>
) {
  const defaultClassNames: ClassNamesConfig<Option, IsMulti, Group> = {
    clearIndicator: () =>
      cx("!px-2 !text-onLight-soft hocus:!text-onLight dark:!text-onDark-soft dark:hocus:!text-onDark"),
    container: () => cx("!w-full !min-h-16", { "!max-w-sm": !fullWidth }),
    control: (selectInnerProps) =>
      cx("!py-3 !w-full !h-full !bg-transparent !rounded-sm !border !border-onLight dark:!border-onDark !shadow-none", {
        "!cursor-not-allowed !bg-grey-light dark:!bg-grey-light/30 !opacity-30": selectInnerProps.isDisabled,
      }),
    dropdownIndicator: (selectInnerProps) =>
      cx("!px-5 dark:!text-white", selectInnerProps.isFocused ? "!text-dark" : "!text-grey"),
    group: () => cx(""),
    groupHeading: () => cx("!text-p3-regular !text-onLight-soft dark:!text-onDark-soft !pb-2 !px-4"),
    indicatorsContainer: () => cx(""),
    indicatorSeparator: () => cx("!bg-onLight-soft dark:!bg-onDark-soft"),
    input: () => cx("!m-0 !p-0 !text-p2-regular !text-dark dark:!text-white"),
    loadingIndicator: (selectInnerProps) =>
      cx("!px-2 dark:!text-white", selectInnerProps.isFocused ? "!text-dark" : "!text-grey"),
    loadingMessage: () => cx("!text-p1-regular !text-onLight-soft dark:!text-onDark-soft"),
    menu: () =>
      cx(
        "!rounded-xs !bg-white dark:!bg-dark !border !border-dark dark:!border-white !shadow !shadow-onLight dark:!shadow-onDark"
      ),
    menuList: () => cx("!py-2"),
    menuPortal: () => cx(""),
    multiValue: () =>
      cx("!rounded-xs !border !bg-transparent dark:!bg-dark-solid !border-onLight dark:!border-transparent"),
    multiValueLabel: () => cx("!text-p2-medium !text-dark dark:!text-white"),
    multiValueRemove: () =>
      cx(
        "!text-onLight-soft hocus:!text-onLight dark:!text-onDark-soft dark:hocus:!text-onDark !rounded-none !border-l !border-transparent hocus:!border-onLight hocus:!bg-transparent hocus:dark:!bg-primary"
      ),
    noOptionsMessage: () => cx("!text-p1-regular !text-onLight-soft dark:!text-onDark-soft"),
    option: (selectInnerProps) =>
      cx("!text-p2-bold !py-2.5 !px-5", {
        "!bg-transparent !text-dark dark:!text-white":
          !selectInnerProps.isSelected && !selectInnerProps.isFocused && !selectInnerProps.isDisabled,
        "!bg-primary-light !text-dark dark:!bg-white/25 dark:!text-white !cursor-pointer":
          selectInnerProps.isFocused && !selectInnerProps.isSelected && !selectInnerProps.isDisabled,
        "!bg-primary hocus:!bg-primary !text-white hocus:!text-white dark:!bg-dark-solid !cursor-default":
          selectInnerProps.isSelected && !selectInnerProps.isDisabled,
        "!text-onLight-soft dark:!text-onDark-soft !cursor-not-allowed": selectInnerProps.isDisabled,
        "!bg-primary-light dark:!bg-white/25": selectInnerProps.isDisabled && selectInnerProps.isFocused,
      }),
    placeholder: () => cx("!text-p2-bold !text-grey dark:!text-grey-light !m-0"),
    singleValue: (selectInnerProps) =>
      cx(
        "!text-p2-bold",
        selectInnerProps.selectProps.menuIsOpen ? "!text-dark dark:!text-white" : "!text-grey dark:!text-grey-light"
      ),
    valueContainer: () => cx("!px-5"),
  };

  return <StateManagedSelect ref={ref} classNames={{ ...defaultClassNames, ...classes }} {...otherProps} />;
}

export const Select = forwardRef(_Select) as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: TSelectProps<Option, IsMulti, Group> & RefAttributes<ReactSelect<Option, IsMulti, Group>>
) => React.ReactElement;

export default Select;
