import { FreeBrandsSvgIcons, FreeSolidSvgIcons, React } from "../../deps.ts";
import Header from "../components/Header.tsx";
import NavigationGrid from "../components/NavigationGrid.tsx";
import Separator from "../components/Separator.tsx";

const HomeScreen = () => {
  const routes = React.useMemo(
    () => [
      {
        url: "https://github.com/zuccha/",
        icon: FreeBrandsSvgIcons.faGithub,
        isExternalLink: true,
        label: "GitHub",
      },
      {
        url: "https://www.linkedin.com/in/amedeo-zucchetti/",
        icon: FreeBrandsSvgIcons.faLinkedin,
        isExternalLink: true,
        label: "LinkedIn",
      },
      // {
      //   url: window.location.origin,
      //   icon: FreeSolidSvgIcons.faLink,
      //   isExternalLink: true,
      //   label: "Website",
      // },
      {
        url: "mailto:amedeo.zucchetti@gmail.com",
        icon: FreeSolidSvgIcons.faEnvelope,
        isExternalLink: true,
        label: "e-mail",
      },
      // {
      //   url: "https://twitter.com/amedeozucchetti",
      //   icon: FreeBrandsSvgIcons.faTwitter,
      //   isExternalLink: true,
      //   label: "Twitter",
      // },
      {
        url: "/more",
        label: "More...",
      },
    ],
    [window.location.origin]
  );

  return (
    <div className="home-screen">
      <Header title="Amedeo Zucchetti" />
      <Separator />
      <NavigationGrid routes={routes} lastRowAlignment="right" />
    </div>
  );
};

export default HomeScreen;
