import { React, FreeRegularSvgIcons, ReactFontAwesome } from "../../deps.ts";
import Text from "./Text.tsx";

interface CourtesyMessageProps {
  title: string;
}

const CourtesyMessage = ({ title }: CourtesyMessageProps) => {
  return (
    <div className="courtesy-message">
      <Text text={title} variant="h3" />
    </div>
  );
};

export default CourtesyMessage;
