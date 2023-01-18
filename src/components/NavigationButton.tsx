import { FontAwesomeSvgCore, React, ReactRouterDOM } from "../../deps.ts";
import Button from "./Button.tsx";

interface NavigationButtonProps {
  href: string;
  icon?: FontAwesomeSvgCore.IconDefinition;
  isExternalLink?: boolean;
  label: string;
}

const NavigationButton = ({
  href,
  icon,
  isExternalLink,
  label,
}: NavigationButtonProps) => {
  const target = isExternalLink ? "_blank" : undefined;

  const navigate = ReactRouterDOM.useNavigate();
  const handleNavigate = React.useCallback(() => {
    if (isExternalLink) {
      open(href, "_blank");
    } else {
      navigate(href);
    }
  }, []);

  return <Button label={label} icon={icon} onClick={handleNavigate} />;
};

export default NavigationButton;
