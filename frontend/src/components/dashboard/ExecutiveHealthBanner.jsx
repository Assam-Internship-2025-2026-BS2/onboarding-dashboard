import { useState } from "react";
import "./ExecutiveHealthBanner.css";

const ExecutiveHealthBanner = ({ data }) => {
  if (!data) return null;

  const {
    status = "HEALTHY",
    critical_products = 0,
    message = "",
    alerts = [],
  } = data;

  const [expanded, setExpanded] = useState(false);

  const severityPriority = { CRITICAL: 1, WARNING: 2 };
  const sortedAlerts = [...alerts].sort(
    (a, b) =>
      (severityPriority[a.severity] || 3) -
      (severityPriority[b.severity] || 3)
  );

  const displayedAlerts = expanded
    ? sortedAlerts
    : sortedAlerts.slice(0, 3);

  return (
    <div className={`health-banner ${status.toLowerCase()}`}>

      <div className="health-left">
        <div className={`health-status-dot ${status.toLowerCase()}`}></div>
        <div>
          <div className={`health-label ${status.toLowerCase()}`}>
            ⚠ Overall Health: {status}
          </div>
          <div className="health-desc">
            {message}
          </div>
        </div>
      </div>

      <div className={`health-alerts ${expanded ? "expanded" : ""}`}>
        {displayedAlerts.map((alert, index) => (
          <div
            key={index}
            className={`alert-pill ${alert.severity === "CRITICAL" ? "red" : "amber"}`}
          >
            <div
              className={`alert-dot-sm ${alert.severity === "CRITICAL" ? "red" : "amber"}`}
            ></div>
            {alert.text}
          </div>
        ))}
      </div>

      {alerts.length > 3 && (
        <div className="health-cta">
          <button
            className={`btn-alerts ${status.toLowerCase()}`}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less ↑" : "View All Alerts →"}
          </button>
        </div>
      )}

    </div>
  );
};

export default ExecutiveHealthBanner;