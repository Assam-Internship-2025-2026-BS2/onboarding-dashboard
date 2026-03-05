import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

import ExecutiveHealthBanner from "../components/dashboard/ExecutiveHealthBanner";
import GlobalFilters from "../components/dashboard/GlobalFilters";
import KPIStrip from "../components/dashboard/KPIStrip";

import JourneyDetails from "../JourneyDetails";
import StageDropMatrix from "../StageDropMatrix";

import mockData from "../mock/dashboardData.json";

import "./Dashboard.css";

const Dashboard = () => {
  const { filters } = useContext(FilterContext);

  // Find response matching selected filters
  const matchedResponse = mockData.responses.find((item) => {
    return (
      item.filters_applied.time_range === filters.time &&
      item.filters_applied.channel === filters.channel &&
      item.filters_applied.region === filters.region &&
      item.filters_applied.segment === filters.segment
    );
  });

  // Fallback dataset
  const fallbackResponse = mockData.responses.find(
    (item) =>
      item.filters_applied.time_range === "This Month" &&
      item.filters_applied.channel === "All Channels" &&
      item.filters_applied.region === "All Regions" &&
      item.filters_applied.segment === "All Segments"
  );

  const dashboardData = (matchedResponse || fallbackResponse)?.data;

  return (
    <div className="dashboard-container">
      
      {/* HEADER + FILTERS */}
      <div className="dashboard-top-section">
        <div className="dashboard-header">
          <h1>Digital Onboarding Dashboard</h1>
        </div>

        <GlobalFilters />
      </div>

      {/* MAIN DASHBOARD */}
      {dashboardData && (
        <div className="dashboard-content">

          {/* Executive Health Banner */}
          <ExecutiveHealthBanner data={dashboardData.overall_health} />

          {/* KPI Cards */}
          <KPIStrip data={dashboardData.kpi_cards} />

          {/* LOWER SECTION */}
          <div className="dashboard-lower-section">

            {/* LEFT: Key Insights */}
            <div className="dashboard-left">
              <JourneyDetails insights={dashboardData.key_insights} />
            </div>

            {/* RIGHT: Stage Drop Matrix */}
            <div className="dashboard-right">
              <StageDropMatrix matrixData={dashboardData.stage_drop_matrix} />
            </div>

          </div>

        </div>
      )}
    </div>
  );
};

export default Dashboard;