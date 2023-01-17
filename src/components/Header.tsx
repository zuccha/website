import { React } from "../../deps.ts";
import Text from "./Text.tsx";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <link rel={"stylesheet"} href={"./static/css/components/Header.css"} />
      <div className="header">
        <Text text={title} variant="h1" align="center" />
      </div>
    </>
  );
};

export default Header;
