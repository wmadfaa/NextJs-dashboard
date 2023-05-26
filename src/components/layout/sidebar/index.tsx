import LayoutPlaceholder from "@/components/layout/components/layoutPlaceholder";
import classNames from "classnames/dedupe";
import { List, TIConProps, TListItemProps, TListProps } from "@/components/base";

export interface IMenuClassNames {
  root: string;
  lists: string;
  list: string;
  listLabel: string;
  navigationList: string;
}

interface IProps {
  navItems: TListItemProps<any>[];
  additionalLists?: { label: string; list: TListProps<any, any> }[];
  className?: string;
  classes?: Partial<IMenuClassNames>;
  logo: TIConProps["icon"];
}

export type TMenuProps = IProps;

function Sidebar(props: TMenuProps) {
  let { logo: Logo, navItems, additionalLists, className, classes } = props;

  return (
    <div className={classNames(className, classes?.root, "bg-dark flex flex-col gap-y-10 h-full w-[300px]")}>
      <div className="pl-8 pt-6 w-full">
        <Logo height={30} />
      </div>
      <div className={classNames(classes?.lists, "space-y-11")}>
        <div className={classNames(classes?.list, classes?.navigationList, "space-y-3")}>
          <span className={classNames(classes?.listLabel, "text-p3-medium text-onDark-soft pl-8 pt-6")}>
            Navigation
          </span>
          <List items={navItems} />
        </div>
        {additionalLists?.map(({ label, list }) => (
          <div key={label} className={classNames(classes?.list, "space-y-3")}>
            <span className={classNames(classes?.listLabel, "text-p3-medium text-onDark-soft pl-8 pt-6")}>{label}</span>
            <List {...list} />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

Sidebar.Placeholder = LayoutPlaceholder(300, "100%");

export default Sidebar;
