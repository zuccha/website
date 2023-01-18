import { FontAwesomeSvgCore, React, ReactFontAwesome } from "../../deps.ts";
import Text from "./Text.tsx";

interface NavigationButtonProps {
  hideBorder?: boolean;
  icon?: FontAwesomeSvgCore.IconDefinition;
  label: string;
  onClick: () => void;
}

const Button = ({
  hideBorder,
  icon,
  label,
  onClick,
}: NavigationButtonProps) => {
  const className = React.useMemo(() => {
    const classNames = ["button"];
    if (icon) classNames.push("button-left");
    else classNames.push("button-center");
    if (hideBorder) classNames.push("button-no-border");
    return classNames.join(" ");
  }, [icon, hideBorder]);

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
