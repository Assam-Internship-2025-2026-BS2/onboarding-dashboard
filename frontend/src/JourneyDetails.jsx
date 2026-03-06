import "./styles/JourneyDetails.css";

function JourneyDetails({ insights = [] }) {

  const criticalCount = insights.filter(
    (item) => item.severity === "critical"
  ).length;

  const actionMap = {
    "Conversion Drop": "View Details",
    "Failure Spike": "Explore Issue",
    "SLA Breach": "Check SLA"
  };

  const handleNavigation = (title) => {
    if (title === "Conversion Drop") {
      alert("Navigate to Credit Card Conversion Details");
    }
    if (title === "Failure Spike") {
      alert("Navigate to Video KYC Issue Page");
    }
    if (title === "SLA Breach") {
      alert("Navigate to SLA Dashboard");
    }
  };

  return (
    <div className="insights-container">

      {/* HEADER */}

      <div className="insight-top">

        <h2 className="insight-title">
          Today's Key Insights
        </h2>

        <div className="critical-badge">
          {criticalCount} Critical
        </div>

      </div>

      {/* CARDS */}

      {insights.map((item, index) => (

        <div key={index} className={`insight-card ${item.severity}`}>

          <div className="insight-header">

            <span className="insight-product">
              {item.product}
            </span>

            <span className="insight-tag">
              {item.title}
            </span>

          </div>

          <div className="insight-impact">
            {item.impact}
          </div>

          <div className="insight-description">
            {item.description}
          </div>

          <div
            className="insight-link"
            onClick={() => handleNavigation(item.title)}
          >
            {actionMap[item.title]} →
          </div>

        </div>

      ))}

    </div>
  );
}

export default JourneyDetails;