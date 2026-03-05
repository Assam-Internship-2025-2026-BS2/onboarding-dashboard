import InsightCard from "./InsightCard";

function InsightsSection({ insights = [], criticalCount = 0 }) {
  return (
    <div className="insights-container">
      
      {/* Header */}
      <div className="insights-header">
        <h2 className="insights-title">Today's Key Insights</h2>

        {criticalCount > 0 && (
          <div className="critical-wrapper">
            <span className="critical-badge">
              {criticalCount} Critical
            </span>
          </div>
        )}
      </div>

      {/* Empty State */}
      {insights.length === 0 ? (
        <div className="empty-state">
          No insights available.
        </div>
      ) : (
        <div className="insight-list">
          {insights.map((item) => (
            <InsightCard
              key={item.id}
              product={item.product}
              metric={item.metric}
              impact={item.impact}
              description={item.description}
              extraInfo={item.extraInfo}
              severity={item.severity}
              ctaLabel={item.ctaLabel}
              onClick={item.onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default InsightsSection;