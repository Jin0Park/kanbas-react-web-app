import React, { useState } from "react";
function PointVariable() {
  const [point, setPoint] = useState(100);
  return (
    <div>
      <input
        className="form-control"
        value={point}
        onChange={(e) => setPoint(e.target.value)}
      />
    </div>
  );
}
export default PointVariable;