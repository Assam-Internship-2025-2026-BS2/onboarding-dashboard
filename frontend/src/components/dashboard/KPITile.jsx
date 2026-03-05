import React from "react";
import "./KPITile.css";
import {
  ArrowRight,
  Check,
  Clock,
  AlertCircle
} from "lucide-react";

// Formatting Helpers


const formatNumber = (num) =>
  num === null || num === undefined
    ? "—"
    : num.toLocaleString("en-IN");

const formatCurrencyCr = (num) =>
  num === null || num === undefined
    ? "—"
    : `₹${num.toLocaleString("en-IN")} Cr`;

const formatPercentage = (num) =>
  num === null || num === undefined ? "—" : `${num}%`;

const formatTimeFromSeconds = (seconds) => {
  if (seconds === null || seconds === undefined) return "—";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs.toString().padStart(2, "0")}s`;
};

const formatDeltaTime = (seconds) => {
  const abs = Math.abs(seconds);
  const mins = Math.floor(abs / 60);
  const secs = abs % 60;
  return `${mins}m ${secs}s`;
};

// Sparkline Component

const Sparkline = ({ data, color }) => {
  if (!data || data.length === 0) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 80;
      const y = 28 - ((value - min) / range) * 24;
      return `${x},${y}`;
    })
    .join(" ");

  // Area points (to close the shape at bottom)
  const areaPoints = `
    ${points}
    80,28
    0,28
  `;

  const gradientId = `sparkGradient-${color.replace("#", "")}`;

  return (
    <svg className="kpi-sparkline" viewBox="0 0 80 28">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area Fill */}
      <polygon
        fill={`url(#${gradientId})`}
        points={areaPoints}
      />

      {/* Line */}
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

// Icons

const KPI_ICONS = {
  started: <ArrowRight size={18} />,
  completed: <Check size={18} />,
  avg_time: <Clock size={18} />,
  risk: <AlertCircle size={18} />
};

// Labels

const KPI_LABELS = {
  started: "Onboarding Started",
  completed: "Onboarding Completed",
  avg_time: "Avg Completion Time",
  risk: "Pipeline at Risk"
};

// Component

const KPITile = ({ type, data }) => {
  if (!data) return null;

  let formattedValue = "—";
  let deltaText = "";
  let deltaClass = "neutral";

  // Primary Value 

  switch (data.unit) {
    case "count":
      formattedValue = formatNumber(data.value);
      break;

    case "currency_cr":
      formattedValue = formatCurrencyCr(data.value);
      break;

    case "time":
      formattedValue = formatTimeFromSeconds(data.value_seconds);
      break;

    default:
      formattedValue = data.value ?? "—";
  }

  // Trend Handling 

  if (data.trend) {
    const { direction } = data.trend;

    if (data.trend.delta_percentage !== undefined) {
      deltaText = `${direction === "UP" ? "↑" : "↓"} ${formatPercentage(
        data.trend.delta_percentage
      )}`;
    }

    if (data.trend.delta_seconds !== undefined) {
      deltaText = `${direction === "UP" ? "↑" : "↓"} ${formatDeltaTime(
        data.trend.delta_seconds
      )}`;
    }

    if (data.trend.delta_value !== undefined) {
      deltaText = `${direction === "UP" ? "↑" : "↓"} ₹${Math.abs(
        data.trend.delta_value
      )} Cr`;
    }

    deltaClass =
      direction === "UP"
        ? "positive"
        : direction === "DOWN"
        ? "negative"
        : "neutral";
  }

  // Sparkline Color 

  const sparkColor =
    type === "risk"
      ? "#dc2626"
      : type === "avg_time"
      ? "#f59e0b"
      : type === "completed"
      ? "#059669"
      : "#2563eb";

  return (
    <div className={`kpi-tile ${type} ${type === "risk" ? "risk-tile" : ""}`}>
      
      {/* Top Section: Icon + Sparkline */}
      <div className="kpi-top">
        <div className="kpi-icon-wrap">
          {KPI_ICONS[type]}
        </div>

        <Sparkline
          data={data.sparkline}
          color={sparkColor}
        />
      </div>

      {/* Label */}
      <div className="kpi-label">
        {KPI_LABELS[type]}
      </div>

      {/* Value + Delta */}
      <div className="kpi-main">
        <div className="kpi-value">{formattedValue}</div>

        {deltaText && (
          <div className={`kpi-delta ${deltaClass}`}>
            {deltaText}
            <span className="kpi-delta-period">
              {data.trend?.comparison_label}
            </span>
          </div>
        )}
      </div>

      {/* Sub Metrics */}
      {data.sub_metrics && data.sub_metrics.length > 0 && (
        <>
          <div className="kpi-divider" />

          <div className="kpi-subs">
            {data.sub_metrics.map((sub, index) => {
              let subValue = "—";

              if (sub.unit === "percentage") {
                subValue = formatPercentage(sub.value);
              } else if (sub.value_seconds !== undefined) {
                subValue = formatTimeFromSeconds(sub.value_seconds);
              } else {
                subValue = formatNumber(sub.value);
              }

              return (
                <div key={index} className="kpi-sub">
                  <div className="kpi-sub-label">{sub.label}</div>
                  <div
                    className={`kpi-sub-value ${
                      type === "risk" ? "red" : ""
                    }`}
                  >
                    {subValue}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default KPITile;