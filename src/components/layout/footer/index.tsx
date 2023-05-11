import { Container } from "@/components/base";
import Link from "next/link";
import classNames from "classnames/dedupe";
import { ReactNode } from "react";
import LayoutPlaceholder from "@/components/layout/components/layoutPlaceholder";

export interface IFooterClassNames {
  root: string;
  container: string;
  linksWrapper: string;
  link: string;
  actionsWrapper: string;
}

interface IProps {
  className?: string;
  classes?: Partial<IFooterClassNames>;
  links: { label: string; href: string }[];
  actions?: ReactNode;
}

export type TFooterProps = IProps;

function Footer(props: TFooterProps) {
  const { className, classes, links, actions } = props;

  return (
    <div className={classNames(className, classes?.root, "h-[64px] w-full ")}>
      <Container className={classNames(classes?.container, "w-full h-full flex items-center justify-between")}>
        <div className={classNames(classes?.linksWrapper, "flex flex-nowrap gap-x-8")}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames(
                classes?.link,
                "text-p3-bold text-dark dark:text-white cursor-pointer hocus:text-primary-dark"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {actions && (
          <div className={classNames(classes?.actionsWrapper, "flex flex-row flex-nowrap items-center gap-x-7")}>
            {actions}
          </div>
        )}
      </Container>
    </div>
  );
}

Footer.Placeholder = LayoutPlaceholder("100%", 64);

export default Footer;
