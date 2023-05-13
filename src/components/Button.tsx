import {
  FontAwesomeSvgCore,
  FreeSolidSvgIcons,
  React,
  ReactFontAwesome,
} from "../../deps.ts";
import Text from "./Text.tsx";

interface ButtonProps {
  full?: boolean;
  hideBorder?: boolean;
  href: string;
  icon?: FontAwesomeSvgCore.IconDefinition;
  isActive?: boolean;
  isExternal?: boolean;
  label: string;
}

const Button = ({
  full,
  hideBorder,
  href,
  icon,
  isActive,
  isExternal,
  label,
}: ButtonProps) => {
  const className = React.useMemo(() => {
    const classNames = ["button"];
    if (full) classNames.push("button-full");
    if (hideBorder) classNames.push("button-no-border");
    if (isActive) classNames.push("button-active");
    return classNames.join(" ");
  }, [hideBorder, icon, isActive]);

  const target = isExternal ? "_blank" : undefined;

  return (
    <a className={className} href={href} target={target}>
      {icon && (
        <ReactFontAwesome.FontAwesomeIcon icon={icon} className="button-icon" />
      )}
      <Text text={label} variant="t1" />
      {isExternal && (
        <div className="button-external-icon">
          <ReactFontAwesome.FontAwesomeIcon
            icon={FreeSolidSvgIcons.faSquareArrowUpRight}
          />
        </div>
      )}
    </a>
  );
};

export default Button;
