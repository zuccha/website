import { FreeRegularSvgIcons, React, ReactRouterDOM } from "../../deps.ts";
import Button from "./Button.tsx";

interface NavigationBarProps {
  actions?: {
    isActive?: boolean;
    label: string;
    onClick: () => void;
  }[];
  contentBelow?: React.ReactNode;
  backUrl?: string;
}

const NavigationBar = ({
  actions = [],
  contentBelow,
  backUrl,
}: NavigationBarProps) => {
  const navigate = ReactRouterDOM.useNavigate();
  const handleGoBack = React.useCallback(() => {
    if (backUrl) navigate(backUrl);
  }, []);

  return (
    <div className="navigation-bar">
      <div className="navigation-bar-header">
        {backUrl ? (
          <Button
            onClick={handleGoBack}
            label="Back"
            icon={FreeRegularSvgIcons.faArrowAltCircleLeft}
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
