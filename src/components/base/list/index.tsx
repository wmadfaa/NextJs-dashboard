import React, { ComponentProps, ElementType, JSXElementConstructor, useMemo, useState } from "react";
import classNames from "classnames/dedupe";
import ListItem from "./listItem";
import { isNumber, slice } from "lodash";

import expandMoreIcon from "@material-design-icons/svg/filled/expand_more.svg";
import expandLessIcon from "@material-design-icons/svg/filled/expand_less.svg";

export interface IListClassNames {
  root: string;
  item: string;
  createItem: string;
  listToggleItem: string;
}

interface IProps<
  T extends ElementType = typeof ListItem,
  ItemProps extends keyof ComponentProps<T> = keyof ComponentProps<T>,
  Item = Partial<Pick<ComponentProps<T>, ItemProps>> & Omit<ComponentProps<T>, ItemProps>
> {
  items: Item[];
  itemProps?: Pick<ComponentProps<T>, ItemProps>;
  itemType?: T | JSXElementConstructor<any>;
  className?: string;
  classes?: Partial<IListClassNames>;
  expandable?: boolean | number;
  createItem?: Item;
}

export type TListProps<T extends ElementType, ItemProps extends keyof ComponentProps<T>> = IProps<T, ItemProps>;

function _List<T extends ElementType, ItemProps extends keyof ComponentProps<T>>(props: TListProps<T, ItemProps>) {
  let { itemType: Item = ListItem, itemProps, items, expandable, createItem, className, classes } = props;
  let maxItemsInCollapsedMode = isNumber(expandable) ? expandable : 3;
  let isExpandable = (isNumber(expandable) || !!expandable) && items.length > maxItemsInCollapsedMode;

  const [expanded, setExpanded] = useState(false);

  const controlledItems = useMemo(() => {
    if (isExpandable && !expanded) return slice(items, 0, maxItemsInCollapsedMode);
    return items;
  }, [expanded, isExpandable, items, maxItemsInCollapsedMode]);

  const handleToggleExpand = () => setExpanded(!expanded);

  return (
    <div className={classNames(className, classes?.root, "space-y-2")}>
      {controlledItems.map((item, index) => (
        <div key={index} className={classNames(classes?.item)}>
          <Item {...itemProps} {...item} />
        </div>
      ))}
      {createItem && (
        <div className={classNames(classes?.item, classes?.createItem)}>
          <Item {...itemProps} {...createItem} />
        </div>
      )}
      {isExpandable && (
        <div className={classNames(classes?.item, classes?.listToggleItem)}>
          <Item
            {...itemProps}
            className="w-full text-start"
            label={`See ${expanded ? "Less" : "More"}`}
            icon={expanded ? expandLessIcon : expandMoreIcon}
            onClick={handleToggleExpand}
          />
        </div>
      )}
    </div>
  );
}

_List.Item = ListItem;

export const List = _List;

export type * from "./listItem";
export default List;
