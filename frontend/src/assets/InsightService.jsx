export const fetchInsights = async () => {
  return [
    {
      id: 1,
      product: "Credit Card",
      metric: "-6.2%",
      impact: "Conversion Drop",
      description: "Drop concentrated at Video KYC stage · Android devices",
      extraInfo: "₹4.2 Cr at risk · West Zone primary · 8,420 users",
      severity: "critical",
      ctaLabel: "View Details",
      redirectUrl: "/credit-card"
    },
    {
      id: 2,
      product: "Video KYC",
      metric: "14.8%",
      impact: "Failure Spike",
      description: "Agent unavailable + timeout errors",
      extraInfo: "8,420 users affected · Peak 11:30–12:15 PM",
      severity: "critical",
      ctaLabel: "Explore Issue",
      redirectUrl: "/video-kyc"
    },
    {
      id: 3,
      product: "Personal Loan",
      metric: "2,180",
      impact: "SLA Breach",
      description: "Cases delayed at underwriting · Avg delay 6 hrs",
      extraInfo: "South Zone · Manual review bottleneck",
      severity: "warning",
      ctaLabel: "Check SLA",
      redirectUrl: "/personal-loan"
    }
  ];
};