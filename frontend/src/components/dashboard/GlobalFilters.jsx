import FilterDropdown from "../common/FilterDropdown";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import "./GlobalFilters.css";

const GlobalFilters = () => {
  const { filters, updateFilter } = useContext(FilterContext);

  return (
    <div className="filters-container">
      <div className="filters-left">

        <FilterDropdown
          value={filters.time}
          options={[
            "This Month",
            "Today",
            "Yesterday",
            "Last 7 Days",
            "Last 30 Days"
          ]}
          onChange={(value) => updateFilter("time", value)}
        />

        <FilterDropdown
          value={filters.channel}
          options={[
            "All Channels",
            "Mobile App",
            "Net Banking",
            "Branch Assisted"
          ]}
          onChange={(value) => updateFilter("channel", value)}
        />

        <FilterDropdown
          value={filters.region}
          options={[
            "All Regions",
            "North Zone",
            "South Zone",
            "East Zone",
            "West Zone"
          ]}
          onChange={(value) => updateFilter("region", value)}
        />

        <FilterDropdown
          value={filters.segment}
          options={[
            "All Segments",
            "Retail",
            "Priority",
            "NR",
            "SME"
          ]}
          onChange={(value) => updateFilter("segment", value)}
        />
      </div>

      <div className="filters-right">
        <FilterDropdown
          value={filters.comparison}
          options={[
            "V/S Last Month",
            "V/S Last Week",
            "V/S Previous Period"
          ]}
          onChange={(value) => updateFilter("comparison", value)}
        />

        <button className="export-btn">
          Export ↓
        </button>
      </div>
    </div>
  );
};

export default GlobalFilters;