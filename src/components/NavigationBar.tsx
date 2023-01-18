import { FreeRegularSvgIcons, React, ReactRouterDOM } from "../../deps.ts";
import Button from "./Button.tsx";

interface NavigationBarProps {
  actions?: {
    label: string;
    onClick: () => void;
  }[];
  showBack?: boolean;
}

const NavigationBar = ({ actions = [], showBack }: NavigationBarProps) => {
  const navigate = ReactRouterDOM.useNavigate();
  const handleGoBack = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className="navigation-bar">
      {showBack ? (
        <Button
          onClick={handleGoBack}
          label="Back"
          icon={FreeRegularSvgIcons.faArrowAltCircleLeft}
          hideBorder
        />
      ) : (
        <div />
      )}
      <div className="navigation-bar-actions">
        {actions.map((action) => (
          <Button onClick={action.onClick} label={action.label} hideBorder />
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
