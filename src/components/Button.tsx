import { FontAwesomeSvgCore, React, ReactFontAwesome } from "../../deps.ts";
import Text from "./Text.tsx";

interface NavigationButtonProps {
  hideBorder?: boolean;
  icon?: FontAwesomeSvgCore.IconDefinition;
  isActive?: boolean;
  label: string;
  onClick: () => void;
}

const Button = ({
  hideBorder,
  icon,
  isActive,
  label,
  onClick,
}: NavigationButtonProps) => {
  const className = React.useMemo(() => {
    const classNames = ["button"];
    if (hideBorder) classNames.push("button-no-border");
    if (icon) classNames.push("button-left");
    else classNames.push("button-center");
    if (isActive) classNames.push("button-active");
    return classNames.join(" ");
  }, [hideBorder, icon, isActive]);

  return (
    <div className={className} onClick={onClick}>
      {icon && (
        <ReactFontAwesome.FontAwesomeIcon icon={icon} className="button-icon" />
      )}
      <Text text={label} variant="t1" />
    </div>
  );
};

export default Button;
