import {
  Guider,
  React,
  ReactMarkdown,
  ReactRouterDOM,
  RehypeRaw,
  RemarkGfm,
} from "../../../deps.ts";
import Text from "../../components/Text.tsx";
import useResource from "../../hooks/useResource.ts";

const GuideScreen = () => {
  const location = ReactRouterDOM.useLocation();

  const pathnames = location.pathname.split("/");
  const name = pathnames[pathnames.length - 1];

  const options = React.useMemo(
    () => ({
      hideInstructionId: true,
    }),
    []
  );

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

  return (
    <ReactMarkdown rehypePlugins={[RehypeRaw]} remarkPlugins={[RemarkGfm]}>
      {guide.format(options)}
    </ReactMarkdown>
  );
};

export default GuideScreen;
