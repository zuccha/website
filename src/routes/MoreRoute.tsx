import { React } from "../../deps.ts";
import Header from "../components/Header.tsx";
import NavigationGrid from "../components/NavigationGrid.tsx";
import Separator from "../components/Separator.tsx";

const MoreScreen = () => {
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
    <div className="route-compact">
      <Header title="Guides" />
      <Separator />
      <NavigationGrid routes={routes} />
    </div>
  );
};

export default MoreScreen;
