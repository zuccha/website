import { FreeBrandsSvgIcons, FreeSolidSvgIcons, React } from "../../deps.ts";
import Button from "../components/Button.tsx";
import Header from "../components/Header.tsx";
import IconButton from "../components/IconButton.tsx";

const HomeRoute = () => {
  document.title = "zuccha";

  const socials = React.useMemo(
    () => [
      {
        icon: FreeBrandsSvgIcons.faGithub,
        isExternal: true,
        url: "https://github.com/zuccha/",
      },
      {
        icon: FreeBrandsSvgIcons.faLinkedin,
        isExternal: true,
        url: "https://www.linkedin.com/in/amedeo-zucchetti/",
      },
      {
        icon: FreeSolidSvgIcons.faLink,
        isExternal: true,
        url: window.location.origin,
      },
      {
        icon: FreeSolidSvgIcons.faEnvelope,
        isExternal: true,
        url: "mailto:amedeo.zucchetti@gmail.com",
      },
      // {
      //   url: "https://twitter.com/amedeozucchetti",
      //   icon: FreeBrandsSvgIcons.faTwitter,
      //   isExternal: true,
      //   label: "Twitter",
      // }
    ],
    [window.location.origin]
  );

  const projects = React.useMemo(
    () => [
      {
        isExternal: false,
        label: "Dark Souls III Guide",
        url: "/#/guides/dark-souls-3-any-glitchless-sl1",
      },
      {
        isExternal: false,
        label: "Solaire's Adventures",
        url: "/#/games/solaires-adventures",
      },
      {
        isExternal: true,
        label: "ROM Hack Manager",
        url: "https://github.com/zuccha/rom-hack-manager",
      },
    ],
    []
  );

  return (
    <div className="home-route">
      <div className="home-route-content">
        <div className="home-route-body">
          <Header title="Amedeo Zucchetti" />

          <div className="home-route-socials">
            {socials.map((social) => (
              <IconButton
                href={social.url}
                icon={social.icon}
                isExternal={social.isExternal}
              />
            ))}
          </div>

          <div className="home-route-projects">
            {projects.map((project) => (
              <Button
                full
                href={project.url}
                isExternal={project.isExternal}
                label={project.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
