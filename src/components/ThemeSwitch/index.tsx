import { Icon } from "@/components/base";

import light_mode_svg from "@material-design-icons/svg/filled/light_mode.svg";
import dark_mode_svg from "@material-design-icons/svg/filled/dark_mode.svg";
import classNames from "classnames/dedupe";

export type TThemeMode = "light" | "dark";

interface IProps {
  theme: TThemeMode;
  onChange(theme: TThemeMode): void;
}

export type TThemeSwitchProps = IProps;

function ThemeSwitch(props: TThemeSwitchProps) {
  const { theme, onChange } = props;

  return (
    <div className="m-2.5 flex border rounded-xs border-onLight dark:border-onDark overflow-hidden">
      <button
        className={classNames(
          "p-1.5 grid place-items-center outline-none",
          theme == "light"
            ? "bg-primary hocus:bg-primary-dark"
            : "text-onLight hover:text-primary dark:text-onDark hover:dark:text-primary-dark"
        )}
        onClick={() => onChange("light")}
      >
        <Icon icon={light_mode_svg} size="xs" className="fill-current" />
      </button>
      <button
        className={classNames(
          "p-1.5 grid place-items-center outline-none",
          theme == "dark"
            ? "bg-primary hocus:bg-primary-dark"
            : "text-onLight hover:text-primary dark:text-onDark hover:dark:text-primary-dark"
        )}
        onClick={() => onChange("dark")}
      >
        <Icon icon={dark_mode_svg} size="xs" className="fill-current" />
      </button>
    </div>
  );
}

export default ThemeSwitch;
