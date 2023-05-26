import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames/dedupe";
import { Icon, TIConProps } from "@/components/base/icon";
import { Tag, TTagProps } from "@/components/base/tag";

type DEFAULT_ELEMENT_TYPE = "button";

export interface IListItemClassNames {
  root: string;
  icon: string;
  label: string;
}

interface IProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> {
  elementType?: T | React.JSXElementConstructor<any>;
  classes?: Partial<IListItemClassNames>;
  className?: string;
  label: string;
  icon?: TIConProps["icon"];
  tag?: TTagProps;
}

export type TListItemProps<T extends React.ElementType = DEFAULT_ELEMENT_TYPE> = IProps<T> &
  React.ComponentPropsWithoutRef<T>;

function _ListItem<T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(props: IProps<T>, ref: ForwardedRef<T>) {
  const { elementType: ElementType = "button", classes, className, label, icon, tag, ...otherProps } = props;

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(
        className,
        classes?.root,
        "flex flex-nowrap py-2 px-7 gap-x-3.5 items-center text-white hover:text-primary hover:bg-[#161616]"
      )}
      {...otherProps}
    >
      {icon && <Icon size="xs" icon={icon} className={classNames(classes?.icon, "fill-current")} />}
      <span className={classNames(classes?.label, "grow text-p2-bold capitalize")}>{label}</span>
      {tag && <Tag {...tag} />}
    </ElementType>
  );
}

export const ListItem = forwardRef(_ListItem) as <T extends React.ElementType = DEFAULT_ELEMENT_TYPE>(
  props: TListItemProps<T> & { ref?: ForwardedRef<T> }
) => React.ReactElement;

export default ListItem;
