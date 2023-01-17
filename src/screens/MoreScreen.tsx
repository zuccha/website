import { React } from "../../deps.ts";
import Header from "../components/Header.tsx";
import NavigationGrid from "../components/NavigationGrid.tsx";
import Separator from "../components/Separator.tsx";

const MoreScreen = () => {
  const routes = React.useMemo(
    () => [
      {
        url: "/guides/dark-souls-3-any-glitchless-sl1",
        label: "DS3 Any%, Glitchless, SL1",
      },
    ],
    [window.location.origin]
  );

  return (
    <div className="home-screen">
      <Header title="Guides" />
      <Separator />
      <NavigationGrid routes={routes} />
    </div>
  );
};

export default MoreScreen;
