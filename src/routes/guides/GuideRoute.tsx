import { Guider, React, ReactRouterDOM } from "../../../deps.ts";
import GuideViewer from "../../components/GuideViewer.tsx";
import Text from "../../components/Text.tsx";
import useResource from "../../hooks/useResource.ts";

const GuideScreen = () => {
  const location = ReactRouterDOM.useLocation();

  const pathnames = location.pathname.split("/");
  const name = pathnames[pathnames.length - 1];

  const [options, setOptions] = React.useState(() => {
    const searchParams = new URLSearchParams(location.search.substring(1));

    const ignoredRules = searchParams.has("ignored-rules")
      ? searchParams
          .get("ignored-rules")!
          .split(",")
          .map((rule) => (isNaN(Number(rule)) ? -1 : Number(rule)))
          .filter((rule) => rule !== -1)
      : [];

    const hideOptional = searchParams.has("hide-optional");
    const hideSafety = searchParams.has("hide-safety");
    const hideComments = searchParams.has("hide-comments");

    return {
      collapseInstructionGroups: true,
      hideComments,
      hideInstructionId: true,
      hideOptional,
      hideSafety,
      ignoredRules,
    };
  });

  const parseGuide = React.useCallback(
    (data: string): Guider.Guide<Guider.GenericInstruction> => {
      try {
        return Guider.parseGuide(data);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    []
  );

  const [guide, status] = useResource(
    `/static/guides/${name}.json`,
    parseGuide
  );

  if (status === "initial" || status === "loading") {
    return null;
  }

  if (status === "failure") {
    return <Text text="Guide is not valid :(" variant="h3" />;
  }

  return <GuideViewer markdown={guide.format(options)} />;
};

export default GuideScreen;
