import React, { ReactNode } from "react";

import { Container } from "@/components/base";
import classNames from "classnames/dedupe";
import LayoutPlaceholder from "../components/layoutPlaceholder";

export interface ITopbarClassNames {
  root: string;
  container: string;
  titleWrapper: string;
  title: string;
  actionsWrapper: string;
}

interface IProps {
  title: string;
  className?: string;
  classes?: Partial<ITopbarClassNames>;
  preActions?: ReactNode;
  postActions?: ReactNode;
}

export type TTopbarProps = IProps;

function Topbar(props: TTopbarProps) {
  const { title, preActions, postActions, className, classes } = props;

  return (
    <div className={classNames(className, classes?.root, "h-[72px] w-full border-b border-onLight dark:border-onDark")}>
      <Container className={classNames(classes?.container, "w-full h-full flex items-center justify-between py-4")}>
        <div className={classNames(classes?.titleWrapper, "flex flex-row flex-nowrap items-center gap-x-7")}>
          {preActions}
          <h1 className={classNames(classes?.titleWrapper, "text-h3 text-dark dark:text-white capitalize")}>{title}</h1>
        </div>
        {postActions && (
          <div className={classNames(classes?.actionsWrapper, "flex flex-row flex-nowrap items-center gap-x-7")}>
            {postActions}
          </div>
        )}
      </Container>
    </div>
  );
}

Topbar.Placeholder = LayoutPlaceholder("100%", 72);

export default Topbar;
