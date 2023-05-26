import React, { ComponentProps, ElementType, JSXElementConstructor } from "react";
import classNames from "classnames/dedupe";
import ListItem from "./listItem";

export interface IListClassNames {
  root: string;
  item: string;
}

interface IProps<
  T extends ElementType = typeof ListItem,
  ItemProps extends keyof ComponentProps<T> = keyof ComponentProps<T>
> {
  items: (Partial<Pick<ComponentProps<T>, ItemProps>> & Omit<ComponentProps<T>, ItemProps>)[];
  itemProps?: Pick<ComponentProps<T>, ItemProps>;
  itemType?: T | JSXElementConstructor<any>;
  className?: string;
  classes?: Partial<IListClassNames>;
}

export type TListProps<T extends ElementType, ItemProps extends keyof ComponentProps<T>> = IProps<T, ItemProps>;

function _List<T extends ElementType, ItemProps extends keyof ComponentProps<T>>(props: TListProps<T, ItemProps>) {
  let { itemType: Item = ListItem, itemProps, items, className, classes } = props;

  return (
    <div className={classNames(className, classes?.root, "space-y-2")}>
      {items.map((item, index) => (
        <div key={index} className={classNames(classes?.item)}>
          <Item {...itemProps} {...item} />
        </div>
      ))}
    </div>
  );
}

_List.Item = ListItem;

export const List = _List;

export type * from "./listItem";
export default List;
