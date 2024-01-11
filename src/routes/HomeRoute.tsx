import { FreeBrandsSvgIcons, FreeSolidSvgIcons, React } from "../../deps.ts";
import Button from "../components/Button.tsx";
import Header from "../components/Header.tsx";
import IconButton from "../components/IconButton.tsx";

type Category = "dark-souls" | "super-mario-world";

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
    ],
    [window.location.origin]
  );

  const categories = React.useMemo(
    () => ({
      ["dark-souls"]: {
        name: "Dark Souls",
        projects: [
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
        ],
      },
      ["super-mario-world"]: {
        name: "Super Mario World",
        projects: [
          {
            isExternal: false,
            label: "Byte Converter",
            url: "/pages/byte_converter.html",
          },
          {
            isExternal: false,
            label: "Byte Table Editor",
            url: "/pages/byte_table_editor.html",
          },
          {
            isExternal: true,
            label: "ROM Hack Manager",
            url: "https://github.com/zuccha/rom-hack-manager",
          },
          {
            isExternal: true,
            label: "SMW Resources",
            url: "https://github.com/zuccha/smw-code",
          },
        ],
      },
    }),
    []
  );

  const [selectedCategory, setSelectedCategory] = React.useState<
    Category | undefined
  >();

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
            {selectedCategory ? (
              <>
                <Button
                  full
                  onClick={() => setSelectedCategory(undefined)}
                  isExternal={false}
                  label=".."
                />
                {categories[selectedCategory].projects.map((project) => (
                  <Button
                    full
                    href={project.url}
                    isExternal={project.isExternal}
                    label={project.label}
                  />
                ))}
              </>
            ) : (
              Object.entries(categories).map(([id, category]) => (
                <Button
                  full
                  label={category.name}
                  onClick={() => {
                    setSelectedCategory(id as Category);
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
