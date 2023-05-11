import React, { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";

import { Container } from "@/components/base";
import classNames from "classnames/dedupe";

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

function Placeholder<T extends React.ElementType = "div">(
  props: ComponentPropsWithoutRef<T> & { elementType?: T | React.JSXElementConstructor<any> },
  ref: ForwardedRef<T>
) {
  const { elementType: ElementType = "div", className, ...otherProps } = props;

  return (
    // @ts-expect-error
    <ElementType
      ref={ref}
      className={classNames(className, "block h-[72px] w-full pointer-events-none")}
      {...otherProps}
    />
  );
}

Topbar.Placeholder = Placeholder;

export default Topbar;
