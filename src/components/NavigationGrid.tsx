import { FontAwesomeSvgCore, React } from "../../deps.ts";
import Button from "./Button.tsx";

type NavigationGridProps = {
  lastRowAlignment?: "left" | "right";
  routes: {
    url: string;
    icon?: FontAwesomeSvgCore.IconDefinition;
    isExternalLink?: boolean;
    label: string;
  }[];
};

const NavigationGrid = ({
  lastRowAlignment = "left",
  routes,
}: NavigationGridProps) => {
  const navigationGridClassName =
    lastRowAlignment === "left"
      ? "navigation-grid-left"
      : "navigation-grid-right";

  return (
    <div className="navigation-grid">
      <div className={navigationGridClassName}>
        {routes.map((route) => (
          <Button
            key={route.label}
            href={route.url}
            icon={route.icon}
            isExternalLink={route.isExternalLink}
            label={route.label}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationGrid;
