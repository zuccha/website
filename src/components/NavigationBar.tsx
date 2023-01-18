import { FreeSolidSvgIcons, React, ReactRouterDOM } from "../../deps.ts";
import Button from "./Button.tsx";

interface NavigationBarProps {
  actions?: {
    isActive?: boolean;
    label: string;
    onClick: () => void;
  }[];
  contentBelow?: React.ReactNode;
  showBack?: boolean;
}

const NavigationBar = ({
  actions = [],
  contentBelow,
  showBack,
}: NavigationBarProps) => {
  const navigate = ReactRouterDOM.useNavigate();
  const handleGoBack = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className="navigation-bar">
      <div className="navigation-bar-header">
        {showBack ? (
          <Button
            onClick={handleGoBack}
            label="Back"
            icon={FreeSolidSvgIcons.faChevronLeft}
            hideBorder
          />
        ) : (
          <div />
        )}
        <div>
          {actions.map((action) => (
            <Button
              onClick={action.onClick}
              label={action.label}
              hideBorder
              isActive={action.isActive}
            />
          ))}
        </div>
      </div>
      {contentBelow}
    </div>
  );
};

export default NavigationBar;
