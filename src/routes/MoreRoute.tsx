import { React } from "../../deps.ts";
import Header from "../components/Header.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import NavigationGrid from "../components/NavigationGrid.tsx";
import Separator from "../components/Separator.tsx";

const MoreScreen = () => {
  document.title = "Amedeo Zucchetti";

  const routes = React.useMemo(
    () => [
      {
        url: "/guides/dark-souls-3-any-glitchless-sl1",
        label: "Dark Souls III",
      },
    ],
    [window.location.origin]
  );

  return (
    <div className="more-route">
      <NavigationBar backUrl="/" />
      <div className={"more-route-content"}>
        <Header title="Guides" />
        <Separator />
        <NavigationGrid routes={routes} />
      </div>
    </div>
  );
};

export default MoreScreen;
