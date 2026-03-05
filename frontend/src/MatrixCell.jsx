import { useNavigate } from "react-router-dom";

export default function MatrixCell({ value, stage, product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/journeys?stage=${stage}&product=${product}`);
  };

  const getClass = () => {
    if (value < 10) return "healthy";
    if (value < 20) return "watch";
    if (value < 25) return "critical";
    return "severe";
  };

  return (
    <div className={`cell-box ${getClass()}`} onClick={handleClick}>
      {value}%
    </div>
  );
}