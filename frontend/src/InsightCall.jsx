import { useEffect, useState } from "react";
import JourneyDetails from "./JourneyDetails";

function InsightCall() {

  const [insights, setInsights] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8000/dashboard")
      .then((res) => res.json())
      .then((data) => {

        const insightsData =
          data.responses[0].data.key_insights;

        setInsights(insightsData);

      })
      .catch((error) => console.error("API Error:", error));

  }, []);

  return (
    <div>
      <JourneyDetails insights={insights} />
    </div>
  );
}

export default InsightCall;