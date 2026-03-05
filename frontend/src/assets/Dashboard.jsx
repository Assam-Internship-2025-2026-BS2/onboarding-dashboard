import { useEffect, useState } from "react";
import { fetchInsights } from "./InsightService";
import InsightsSection from "./InsightSection";

function Dashboard() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchInsights();

        const mapped = data.map((item) => ({
          ...item,
          onClick: () => (window.location.href = item.redirectUrl),
        }));

        setInsights(mapped);
      } catch (err) {
        console.error("Error fetching insights:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const criticalCount = insights.filter(
    (i) => i.severity === "critical"
  ).length;

  return (
    <div className="dashboard-layout">
      <div className="dashboard-left">
        {loading ? (
          <div>Loading insights...</div>
        ) : (
          <InsightsSection
            insights={insights}
            criticalCount={criticalCount}
          />
        )}
      </div>

      <div className="dashboard-right">
        {/* Other dashboard widgets */}
      </div>
    </div>
  );
}

export default Dashboard;