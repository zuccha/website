import { React, FreeRegularSvgIcons } from "../../deps.ts";
import ActionButton from "./ActionButton.tsx";
import Text from "./Text.tsx";

interface CourtesyMessageProps {
  title: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const CourtesyMessage = ({ title, action }: CourtesyMessageProps) => {
  return (
    <div className="courtesy-message">
      <Text text={title} variant="h3" />
      {action && (
        <div className="courtesy-message-action">
          <ActionButton
            hideBorder
            icon={FreeRegularSvgIcons.faArrowAltCircleLeft}
            label={action.label}
            onClick={action.onClick}
          />
        </div>
      )}
    </div>
  );
};

export default CourtesyMessage;
