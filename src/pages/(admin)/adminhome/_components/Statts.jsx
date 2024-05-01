import React from "react";
export default function Statts() {
  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Tables</div>
          <div className="stat-value">85</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>

        <div className="stat">
          <div className="stat-title">Active Tables</div>
          <div className="stat-value">21</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>

        <div className="stat">
          <div className="stat-title">Active Total Sum</div>
          <div className="stat-value">4975</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>

        <div className="stat">
          <div className="stat-title">Total Sum</div>
          <div className="stat-value">8200</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
    </div>
  );
}
