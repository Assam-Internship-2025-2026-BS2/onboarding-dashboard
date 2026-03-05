function InsightCard({
  product,
  metric,
  impact,
  description,
  extraInfo,
  severity,
  ctaLabel,
  onClick,
}) {
  return (
    <div className={`insight-card insight-${severity}`}>
      
      {/* Top Grid */}
      <div className="card-grid">

        <div>
          <div className="product-name">{product}</div>
          <div className="metric-value">{metric}</div>
        </div>

        <div className="impact-wrapper">
          <span className={`impact-pill impact-${severity}`}>
            {impact}
          </span>
        </div>

      </div>

      {/* Description */}
      <p className="description">{description}</p>

      {extraInfo && (
        <div className="extra-info">
          {extraInfo}
        </div>
      )}

      <button className="cta-link" onClick={onClick}>
        {ctaLabel} →
      </button>

    </div>
  );
}

export default InsightCard;