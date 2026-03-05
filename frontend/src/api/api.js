const BASE_URL = "http://127.0.0.1:8000";

export const fetchInsights = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/insights`);
    if (!response.ok) {
      throw new Error("Failed to fetch insights");
    }
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};