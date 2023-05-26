import { Footer, Sidebar, Topbar } from "@/components/layout";
import { IconButton, Button } from "@/components/base";
import ThemeSwitch from "@/components/ThemeSwitch";
import Link from "next/link";

import dashboard_icon from "@material-design-icons/svg/filled/dashboard.svg";
import store_icon from "@material-design-icons/svg/filled/store.svg";
import group_icon from "@material-design-icons/svg/filled/group.svg";
import person_pin_circle_icon from "@material-design-icons/svg/filled/person_pin_circle.svg";
import shopping_cart_icon from "@material-design-icons/svg/filled/shopping_cart.svg";
import insights_icon from "@material-design-icons/svg/filled/insights.svg";

import chevron_left_svg from "@material-design-icons/svg/filled/chevron_left.svg";
import notifications_svg from "@material-design-icons/svg/filled/notifications.svg";
import add_circle_svg from "@material-design-icons/svg/filled/add_circle.svg";
import extension_svg from "@material-design-icons/svg/filled/extension.svg";

import logo_svg from "@/assets/svg/logo.svg";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: IProps) {
  return (
    <>
      <div className="fixed inset-0 flex flex-row z-10 pointer-events-none">
        <Sidebar
          logo={logo_svg}
          navItems={[
            { elementType: Link, icon: dashboard_icon, label: "dashboard", href: "/dashboard" },
            { elementType: Link, icon: store_icon, label: "products", href: "/products" },
            { elementType: Link, icon: group_icon, label: "contacts", href: "/contacts" },
            {
              elementType: Link,
              icon: person_pin_circle_icon,
              label: "customers",
              href: "/customers",
              tag: { label: "23", theme: "primary" },
            },
            {
              elementType: Link,
              icon: shopping_cart_icon,
              label: "sales",
              href: "/sales",
              tag: { label: "4", theme: "green" },
            },
            { elementType: Link, icon: insights_icon, label: "analytics", href: "/analytics" },
          ]}
          additionalLists={[
            {
              label: "Team Members",
              list: {
                items: [
                  { elementType: Link, icon: dashboard_icon, label: "dashboard", href: "/dashboard" },
                  { elementType: Link, icon: store_icon, label: "products", href: "/products" },
                  { elementType: Link, icon: group_icon, label: "contacts", href: "/contacts" },
                ],
              },
            },
          ]}
          className="pointer-events-auto"
        />
        <div className="flex-grow flex flex-col justify-between">
          <Topbar
            title="Title"
            preActions={<IconButton variant="outlined" icon={chevron_left_svg} size="sm" />}
            postActions={
              <>
                <IconButton variant="transparent" icon={notifications_svg} size="sm" />
                <Button variant="transparent" size="sm" label="Apps" icon={extension_svg} />
                <Button variant="filled" size="sm" label="Create New" icon={add_circle_svg} />
              </>
            }
            className="bg-grey-solid dark:bg-dark pointer-events-auto"
          />
          <Footer
            links={[
              { label: "Privacy Policy", href: "#" },
              { label: "License", href: "#" },
              { label: "API", href: "#" },
            ]}
            actions={
              <>
                <ThemeSwitch theme="light" onChange={console.log} />
              </>
            }
            className="bg-grey-solid dark:bg-dark pointer-events-auto"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-row">
        <Sidebar.Placeholder />
        <div className="flex-grow flex flex-col justify-between">
          <Topbar.Placeholder />
          <main className="flex-grow">{children}</main>
          <Footer.Placeholder />
        </div>
      </div>
    </>
  );
}
