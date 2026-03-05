import { useEffect, useState } from "react";
import MatrixTable from "./MatrixTable";
import Legend from "./Legend";

const mockData = {
  stages: [
    {
      name: "OTP Verify",
      products: {
        "Credit Card": 8,
        "Personal Loan": 5,
        "Savings Acc": 4,
        "Home Loan": 6,
        "Auto Loan": 5,
      },
    },
    {
      name: "CKYC / KYC",
      products: {
        "Credit Card": 24,
        "Personal Loan": 12,
        "Savings Acc": 8,
        "Home Loan": 15,
        "Auto Loan": 9,
      },
    },
    {
      name: "Doc Upload",
      products: {
        "Credit Card": 12,
        "Personal Loan": 15,
        "Savings Acc": 18,
        "Home Loan": 20,
        "Auto Loan": 22,
      },
    },
    {
      name: "Eligibility",
      products: {
        "Credit Card": 18,
        "Personal Loan": 10,
        "Savings Acc": 6,
        "Home Loan": 28,
        "Auto Loan": 12,
      },
    },
    {
      name: "Underwriting",
      products: {
        "Credit Card": 6,
        "Personal Loan": 22,
        "Savings Acc": 3,
        "Home Loan": 18,
        "Auto Loan": 8,
      },
    },
    {
      name: "Approval",
      products: {
        "Credit Card": 5,
        "Personal Loan": 8,
        "Savings Acc": 2,
        "Home Loan": 12,
        "Auto Loan": 4,
      },
    },
  ],
};

export default function StageDropMatrix() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setData(mockData.stages);
    setProducts(Object.keys(mockData.stages[0].products));
  }, []);

  return (
    <div className="container">
      <div className="header-row">
        <div>
          <h2 className="title">Stage Drop-off Matrix</h2>
          <p className="subtitle">
            Drop rate at each onboarding stage per product · Click any cell to drill down
          </p>
        </div>
        <div className="badge">1 Critical Stage</div>
      </div>

      <div className="table-wrapper">
        <MatrixTable data={data} products={products} />
      </div>

      <Legend />
    </div>
  );
}