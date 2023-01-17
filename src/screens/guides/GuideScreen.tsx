import { React } from "../../../deps.ts";
import Header from "../../components/Header.tsx";
import Separator from "../../components/Separator.tsx";

const GuideScreen = () => {
  const name = window.location.pathname;

  return (
    <div>
      <Header title={name} />
      <Separator />
    </div>
  );
};

export default GuideScreen;
