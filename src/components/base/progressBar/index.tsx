import { ComponentPropsWithoutRef, ForwardedRef, forwardRef, useMemo } from "react";
import classNames from "classnames/dedupe";

interface IProgressBarClassNames {
  root: string;
  progress: string;
}
interface IProps {
  progress: number;
  theme?: "primary" | "red" | "green" | "yellow" | "grey";
  mapProgress2Theme?: boolean;
  classes?: Partial<IProgressBarClassNames>;
  direction?: "vert" | "horiz";
}

export type TProgressBarProps = IProps & ComponentPropsWithoutRef<"div">;

function _ProgressBar(props: TProgressBarProps, ref: ForwardedRef<HTMLDivElement>) {
  let {
    direction = "horiz",
    progress = 0,
    theme = "primary",
    mapProgress2Theme,
    classes,
    className,
    ...otherProps
  } = props;

  const $theme = useMemo(() => {
    if (!mapProgress2Theme) return theme;
    if (progress >= (1 / 5) * 3) return "green";
    if (progress >= (1 / 5) * 2) return "yellow";
    if (progress > 0) return "red";
    return "grey";
  }, [mapProgress2Theme, progress, theme]);

  return (
    <div
      ref={ref}
      {...otherProps}
      className={classNames(className, classes?.root, "relative", {
        "w-full h-1.5": direction == "horiz",
        "h-full w-1.5 rotate-180": direction == "vert",
        "bg-primary": $theme == "primary",
        "bg-secondary-red": $theme == "red",
        "bg-secondary-green": $theme == "green",
        "bg-secondary-yellow": $theme == "yellow",
        "bg-grey-light": $theme == "grey",
      })}
    >
      <span
        className={classNames(classes?.progress, "block bg-[#0F0F0F]/30 transition-transform", {
          "h-full": direction == "horiz",
          "w-full": direction == "vert",
        })}
        style={{ [direction == "horiz" ? "width" : "height"]: `${progress * 100}%` }}
      />
    </div>
  );
}

export const ProgressBar = forwardRef(_ProgressBar);

export default ProgressBar;
