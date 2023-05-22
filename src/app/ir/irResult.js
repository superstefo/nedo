"use client";
import React from "react";

const IrResult = ({ result }) => {

  const IRResult = () => (
    <>
      {result.map((one, ind) => {
        return (
          <label key={ind} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {one != null ? <>{one}</> : <></>}
          </label>
        )
      })}
    </>
  );

  return (
    <div>
      <br></br>
      <div className="grid gap-4 mb-4 md:grid-cols-1">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {result.homaIndex}
        </label>
      </div>
      <IRResult/>
    </div>
  )
}

export default IrResult;