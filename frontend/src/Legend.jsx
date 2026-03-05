export default function Legend() {
  return (
    <div className="legend">
      <span><div className="green-box"></div> Healthy</span>
      <span><div className="amber-box"></div> Watch</span>
      <span><div className="red-box"></div> Critical</span>
      <span><div className="darkred-box"></div> Severe</span>
    </div>
  );
}