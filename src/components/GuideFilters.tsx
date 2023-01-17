import { React } from "../../deps.ts";
import Checkbox from "./Checkbox.tsx";
import Text from "./Text.tsx";

type GuideFiltersProps = {
  hideComments: boolean;
  hideOptional: boolean;
  hideSafety: boolean;
  ignoredRules: number[];
  rules: Record<number, string>;
  onToggleHideComments: () => void;
  onToggleHideOptional: () => void;
  onToggleHideSafety: () => void;
  onToggleIgnoredRule: (rule: number) => void;
};

const GuideFilters = ({
  hideComments,
  hideOptional,
  hideSafety,
  ignoredRules,
  rules,
  onToggleHideComments,
  onToggleHideOptional,
  onToggleHideSafety,
  onToggleIgnoredRule,
}: GuideFiltersProps) => {
  return (
    <div className="guide-filters">
      <Text text="Filters" variant="h4" />
      <div className="guide-filters-filter">
        <Checkbox
          isChecked={hideComments}
          label="Hide comments"
          onToggleChecked={onToggleHideComments}
        />
      </div>
      <div className="guide-filters-filter">
        <Checkbox
          isChecked={hideOptional}
          label="Hide optional strats"
          onToggleChecked={onToggleHideOptional}
        />
      </div>
      <div className="guide-filters-filter">
        <Checkbox
          isChecked={hideSafety}
          label="Hide safety strats"
          onToggleChecked={onToggleHideSafety}
        />
      </div>
      {Object.entries(rules).map(([id]) => (
        <div key={id} className="guide-filters-filter">
          <Checkbox
            isChecked={ignoredRules.includes(Number(id))}
            label={`Ignore rule ${id}`}
            onToggleChecked={() => onToggleIgnoredRule(Number(id))}
          />
        </div>
      ))}
    </div>
  );
};

export default GuideFilters;
