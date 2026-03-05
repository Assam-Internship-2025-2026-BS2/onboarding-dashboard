import React from "react";
import KPITile from "./KPITile";
import "./KPIStrip.css";

const KPIStrip = ({ data }) => {
  if (!data) return null;

  return (
    <div className="kpi-grid"    >
      <KPITile type="started" data={data.onboarding_started} />
      <KPITile type="completed" data={data.onboarding_completed} />
      <KPITile type="avg_time" data={data.avg_completion_time} />
      <KPITile type="risk" data={data.pipeline_at_risk} />
    </div>
  );
};

export default KPIStrip;