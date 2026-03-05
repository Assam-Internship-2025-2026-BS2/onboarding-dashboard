import "./styles/JourneyDetails.css";

function JourneyDetails({ insights }) {

  if (!insights || insights.length === 0) {
    return null;
  }

  return (
    <div className="insights-container">

      <h2>Today's Key Insights</h2>

      {insights.map((item, index) => (
        <div key={index} className={`insight-card ${item.severity}`}>

          <div className="insight-header">

            <span className="insight-product">
              {item.product}
            </span>

            <span className="insight-impact">
              {item.impact}
            </span>

          </div>

          <div className="insight-title">
            {item.title}
          </div>

          <div className="insight-description">
            {item.description}
          </div>

        </div>
      ))}

    </div>
  );
}

export default JourneyDetails;