import React from "react";
export default function PreviewList({segmentData}){
  const generateSegmentNames = (segment) => {
    const names = [];
    for (let i = 1; i <= parseInt(segment.tableCount); i++) {
      names.push(`${segment.name}-${i}`);
    }
    return names;
  };
  return(
    
      <div className="overflow-x-auto h-96">
      <table className="table table-pin-rows">
      {segmentData.map((segment, index) => (
        <>
        <thead key={index}>
          <tr>
            <th className="text-3xl text-slate-700 underline decoration-4 decoration-primary "> {segment.name}</th>
          </tr>
        </thead>
        <tbody>
            {generateSegmentNames(segment).map((name, i) => (
              <tr key={i}><td>{name}</td></tr>
            ))}
          </tbody>
          </>
      ))}
      </table>
    </div>
 
  )
}