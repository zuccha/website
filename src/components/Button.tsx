import {
  FontAwesomeSvgCore,
  React,
  ReactFontAwesome,
  ReactRouterDOM,
} from "../../deps.ts";
import Text from "./Text.tsx";

interface ButtonProps {
  href: string;
  icon?: FontAwesomeSvgCore.IconDefinition;
  isExternalLink?: boolean;
  label: string;
}

const Button = ({ href, icon, isExternalLink, label }: ButtonProps) => {
  const target = isExternalLink ? "_blank" : undefined;
  const align = icon ? "button-left" : "button-center";
  return (
    <>
      <link rel={"stylesheet"} href={"/static/css/components/Button.css"} />
      <ReactRouterDOM.Link
        className={`button ${align}`}
        to={href}
        target={target}
      >
        {icon && (
          <ReactFontAwesome.FontAwesomeIcon
            icon={icon}
            className="button-icon"
          />
        )}
        <Text text={label} variant="t1" />
      </ReactRouterDOM.Link>
    </>
  );
};

export default Button;
