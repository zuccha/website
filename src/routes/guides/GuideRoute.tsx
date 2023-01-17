import { useMemo } from "https://esm.sh/v103/@types/react@18.0.26/index.d.ts";
import { Guider, React, ReactRouterDOM } from "../../../deps.ts";
import GuideFilters from "../../components/GuideFilters.tsx";
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

  const rules = React.useMemo(() => {
    return guide ? guide.getRules({ isImpactful: true }) : [];
  }, [guide]);

  const handleToggleHideComments = React.useCallback(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      hideComments: !prevOptions.hideComments,
    }));
  }, []);

  const handleToggleHideOptional = React.useCallback(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      hideOptional: !prevOptions.hideOptional,
    }));
  }, []);

  const handleToggleHideSafety = React.useCallback(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      hideSafety: !prevOptions.hideSafety,
    }));
  }, []);

  const handleToggleIgnoredRule = React.useCallback((rule: number) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      ignoredRules: prevOptions.ignoredRules.includes(rule)
        ? prevOptions.ignoredRules.filter((other) => other !== rule)
        : [...prevOptions.ignoredRules, rule],
    }));
  }, []);

  if (status === "initial" || status === "loading") {
    return null;
  }

  if (status === "failure") {
    return <Text text="Guide is not valid :(" variant="h3" />;
  }

  return (
    <div className="guide-route">
      <div className="guide-route-filters">
        <GuideFilters
          hideComments={options.hideComments}
          hideOptional={options.hideOptional}
          hideSafety={options.hideSafety}
          ignoredRules={options.ignoredRules}
          rules={rules}
          onToggleHideComments={handleToggleHideComments}
          onToggleHideOptional={handleToggleHideOptional}
          onToggleHideSafety={handleToggleHideSafety}
          onToggleIgnoredRule={handleToggleIgnoredRule}
        />
      </div>
      <div className="guide-route-guide">
        <GuideViewer markdown={guide.format(options)} />
      </div>
    </div>
  );
};

export default GuideScreen;
